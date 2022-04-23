import React, { useEffect, useState } from 'react'
// import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
// import ic_wechat from 'assets/img/ic_wechat.png'
// import LoginButton from 'component/LoginButton/index'
// import successToast from 'util/successToast'
import request from 'service/request'
import SearchCom from './SearchCom'
import './index.scss'

const DeviceList = () => {
    const [deviceSearch, setDeviceSearch] = useState(null)
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
            console.log(res)
        })
    }

    const onInput = (e) => {
        setDeviceSearch(e.detail.value)
    }

    return (
        <View className="deviceList">
            <SearchCom onInput={onInput} onConfirm={deviceQuery} />
        </View>
    )
}
export default DeviceList
