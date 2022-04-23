import React, { useEffect, useMemo, useState } from 'react'
import { View, Button, Icon } from '@tarojs/components'
import './index.scss'
import PickerCom from 'component/PickerCom/PickerCom'
import TextareaCom from 'component/TextareaCom/TextareaCom'
import Taro from '@tarojs/taro'
import request from 'service/request'
import successToast from 'util/successToast'

const Leave = () => {
    const [startTime, setStartTime] = useState(null)
    const [endTime, setEndTime] = useState(null)
    const [reason, setReason] = useState(null)
    const type = useMemo(() => Taro.Current.router.params.type)
    const leaveAdd = () => {
        const leaveType = type === '0' ? 1 : 2
        const params = { startTime, endTime, reason, leaveType }
        request('leave/add', params).then((res) => {
            if (res.code === 200) {
                successToast('申请成功', () => {
                    Taro.switchTab({
                        url: `/pages/index/index`,
                    })
                })
            }
        })
    }
    return (
        <View className="leave">
            <PickerCom
                label={`${type === '0' ? '请假' : '出差'}开始时间`}
                placeholder="请选择开始时间"
                date={startTime}
                onInput={(e) => {
                    setStartTime(e.detail.value)
                }}
            />
            <PickerCom
                label={`${type === '0' ? '请假' : '出差'}结束时间`}
                placeholder="请选择结束时间"
                date={endTime}
                onInput={(e) => {
                    setEndTime(e.detail.value)
                }}
            />
            <TextareaCom
                label={`${type === '0' ? '请假' : '出差'}理由`}
                placeholder="请输入理由"
                value={reason}
                onInput={(e) => {
                    setReason(e.detail.value)
                }}
            />
            <Button
                className="leave-save"
                onClick={() => {
                    leaveAdd()
                }}
            >
                提交申请
            </Button>
        </View>
    )
}
export default Leave
