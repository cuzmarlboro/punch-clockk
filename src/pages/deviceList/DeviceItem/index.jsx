import React from 'react'
import { View, Image } from '@tarojs/components'
import './index.scss'
const DeviceItem = (props) => {
    const { deviceUrl, deviceName, lastTime, username, deviceStatus } = props
    return (
        <View className="deviceItem">
            <View className="deviceItem-img">
                <Image src={deviceUrl} className="image" />
            </View>
            <View className="deviceItem-content">
                <View>设备名称：{deviceName}</View>
                <View>设备状态：{deviceStatus === 0 ? '空闲' : '借用中'}</View>
                <View>最后租借人：{username}</View>
                <View>最后租借时间：{lastTime}</View>
            </View>
        </View>
    )
}
export default DeviceItem
