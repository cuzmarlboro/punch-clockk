import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import { useEffect, useMemo } from 'react'
import Taro from '@tarojs/taro'
import HandleItem from './HandleItem'
import ic_maintenance from 'assets/handle/ic_maintenance.png'
import ic_truck_insurance from 'assets/handle/ic_truck_insurance.png'
import ic_professional_skills from 'assets/handle/ic_professional_skills.png'
import ic_truck_deal from 'assets/handle/ic_truck_deal.png'
import ic_sources_information from 'assets/handle/ic_sources_information.png'
import sw1 from 'assets/swiper/sw1.jpg'
import sw2 from 'assets/swiper/sw2.jpg'
import getToken from 'util/getToken'
import './index.scss'

const Index = () => {
    // 判断是否登录
    useEffect(() => {
        const isLogin = async () => {
            const token = await getToken()
            if (!token) {
                Taro.showModal({
                    showCancel: false,
                    content: '您还未登录，请立即前往!',
                    success: () => {
                        Taro.reLaunch({ url: '/pages/login/index' })
                    },
                })
                console.log('无tokens')
            }
        }
        isLogin()
    }, [])
    const workList = useMemo(() => {
        return [
            {
                src: ic_truck_insurance,
                text: '日常打卡',
                url: '/pages/signIn/index',
            },
            {
                src: ic_professional_skills,
                text: '请假申请',
                url: `/pages/leave/index?type=0`,
            },
            {
                src: ic_truck_deal,
                text: '出差申请',
                url: '/pages/leave/index?type=1',
            },
        ]
    })
    const equipmentList = useMemo(() => {
        return [
            {
                src: ic_maintenance,
                text: '设备状态',
                url: '/pages/deviceList/index',
            },
            {
                src: ic_sources_information,
                text: '租借申请',
                url: '/pages/deviceApply/index',
            },
        ]
    })
    return (
        <View className="index">
            <Swiper>
                <SwiperItem>
                    <Image src={sw1} className="index-img" />
                </SwiperItem>
                <SwiperItem>
                    <Image src={sw2} className="index-img" />
                </SwiperItem>
            </Swiper>
            <View className="index-content">
                <View className="title">考勤管理</View>
                <View className="handleList">
                    {workList.map((item) => (
                        <HandleItem
                            key={item.text}
                            text={item.text}
                            src={item.src}
                            url={item.url}
                        />
                    ))}
                </View>
                <View className="title">设备租借</View>
                <View className="handleList">
                    {equipmentList.map((item) => (
                        <HandleItem
                            key={item.text}
                            text={item.text}
                            src={item.src}
                            url={item.url}
                        />
                    ))}
                </View>
            </View>
        </View>
    )
}

export default Index
