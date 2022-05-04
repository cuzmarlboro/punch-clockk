import React, { useEffect, useState } from 'react'
// import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
// import ic_wechat from 'assets/img/ic_wechat.png'
// import LoginButton from 'component/LoginButton/index'
// import successToast from 'util/successToast'
import request from 'service/request'
import SearchCom from './SearchCom'
import DeviceItem from './DeviceItem'
import './index.scss'

const DeviceList = () => {
    const [deviceSearch, setDeviceSearch] = useState('')
    const [data, setData] = useState([])
    useEffect(() => {
        deviceQuery()
    }, [])

    // 查询设备列表
    const deviceQuery = () => {
        const params = {
            pageIndex: 1,
            pageSize: 20,
            deviceSearch,
        }
        request('device/query', params).then((res) => {
            if (res.code === 200) {
                setData(res.data)
            }
        })
    }

    const onInput = (e) => {
        setDeviceSearch(e.detail.value)
    }

    return (
        <View className="deviceList">
            <SearchCom onInput={onInput} onConfirm={deviceQuery} />
            {data.map((item) => (
                <DeviceItem
                    deviceUrl={item.deviceUrl}
                    deviceName={item.deviceName}
                    username={item.username}
                    lastTime={item.lastTime}
                    key={item.deviceCode}
                    deviceStatus={item.deviceStatus}
                />
            ))}
        </View>
    )
}
export default DeviceList
