import React from 'react'
import { View, Text, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

const HandleItem = ({ src, text, url }) => {
    const jump = () => {
        console.log(url)
        Taro.navigateTo({ url })
    }
    return (
        <View className="HandleItem" onClick={jump}>
            <Image src={src} className="HandleItem-img" />
            <View className="HandleItem-text">{text}</View>
        </View>
    )
}
export default HandleItem
