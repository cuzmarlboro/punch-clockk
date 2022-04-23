import React, { useEffect, useMemo, useState } from 'react'
import { View, Map, Button, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import request from 'service/request'
import getDate from 'util/getDate'
import getDate2 from 'util/getDate2'
import successToast from 'util/successToast'
import './index.scss'

const SignIn = () => {
    const [data, setData] = useState({ longitude: 0, latitude: 0 })
    const [startTime, setStartTime] = useState(false) // 是否早上已打卡
    const [endTime, setEndTime] = useState(false) // 是否晚上已打卡

    const nowDate = useMemo(() => {
        return getDate()
    }, [])
    // 查看今天打卡情况
    useEffect(() => {
        request('check/getInfo').then((res) => {
            console.log('查看今天打卡情况', res)
        })
    }, [])
    // 获取当前位置
    useEffect(() => {
        getCurrentLocation('init')
    }, [])
    const getCurrentLocation = async () => {
        await Taro.getLocation({
            type: 'gcj02',
            success: function (res) {
                const { latitude, longitude } = res
                setData({ latitude, longitude })
            },
        })
    }
    // 打卡
    const signin = (type) => {
        const params = { latitude: data.latitude, longitude: data.longitude }
        params[type] = getDate2()
        params.status = type === 'startTime' ? 0 : 1
        request('check/add', params).then((res) => {
            console.log('打卡', res)
            if (res.code === 200) {
                successToast('打卡成功')
                if (params.status) {
                    setEndTime(true)
                } else {
                    setStartTime(true)
                }
            }
        })
    }
    return (
        <View className="signIn">
            <Map
                latitude={data.latitude}
                longitude={data.longitude}
                style={{ height: '70vh', width: '100vw' }}
                showLocation={true}
                showCompass={true}
                optimize={true}
                id="myMap"
            ></Map>
            <View className="operation">
                <View className="operation-date">
                    <Text className="date-text">当前日期：{nowDate}</Text>
                    <Text>天气：晴天 ☀️</Text>
                </View>
                <Button
                    className="operation-btn"
                    onClick={() => {
                        signin('startTime')
                    }}
                >
                    {`上班打卡（9:00-9:30 ${startTime ? '已打卡' : ''}）`}
                </Button>
                <Button
                    className="operation-btn"
                    onClick={() => {
                        signin('endTime')
                    }}
                >
                    {`下班打卡（18:00之后 ${endTime ? '已打卡' : ''}）`}
                </Button>
            </View>
        </View>
    )
}

export default SignIn
