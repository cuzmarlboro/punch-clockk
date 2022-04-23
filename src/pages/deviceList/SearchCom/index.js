import React from 'react'
// import Taro from '@tarojs/taro'
import { View, Image, Input } from '@tarojs/components'
// import ic_wechat from 'assets/img/ic_wechat.png'
// import LoginButton from 'component/LoginButton/index'
// import successToast from 'util/successToast'
// import request from 'service/request'
import ic_search from 'assets/icon/ic_search.svg'
import './index.scss'

const SearchCom = (props) => {
    const { onInput, onConfirm } = props
    return (
        <View className="searchCom">
            <Image src={ic_search} className="searchCom-icon" />
            <Input placeholder='请输入设备名称或借用人名称' className='searchCom-input' onInput={onInput} onConfirm={onConfirm} />
        </View>
    )

}
export default SearchCom
