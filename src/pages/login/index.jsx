import React from 'react'
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import ic_wechat from 'assets/img/ic_wechat.png'
import LoginButton from 'component/LoginButton/index'
import successToast from 'util/successToast'
import request from 'service/request'
import './index.scss'

const login = () => {
    const wxLogin = () => {
        Taro.login().then((res) => {
            request('public/wx/login', {
                code: res.code,
            }).then((res) => {
                if (res.code === 200) {
                    successToast('登录成功', () => {
                        Taro.switchTab({
                            url: `/pages/index/index`,
                        })
                    })
                }
            })
        })
    }
    return (
        <View className="login">
            <View className="buttons">
                <LoginButton click={wxLogin}>
                    <Image src={ic_wechat} className="logoImage" />
                    微信用户一键登录
                </LoginButton>
            </View>
        </View>
    )
}
export default login
