import React, { useEffect, useMemo, useState } from 'react'
import { View, Button, Icon } from '@tarojs/components'
import request from 'service/request'
import PickerCom from 'component/PickerCom/PickerCom'
import TextareaCom from 'component/TextareaCom/TextareaCom'
import SelectCom from 'component/SelectCom/SelectCom'
import successToast from 'util/successToast'
import './index.scss'

const DeviceApply = () => {
    const [deviceList, setDeviceList] = useState([])
    const [deviceCode, setDeviceCode] = useState(null)
    const [deviceName, setDeviceName] = useState(null)
    const [startTime, setStartTime] = useState(null)
    const [endTime, setEndTime] = useState(null)
    const [reason, setReason] = useState(null)
    // 获取设备列表
    useEffect(() => {
        request('device/list').then((res) => {
            if (res.code === 200) {
                setDeviceList(res.data)
            }
        })
    }, [])
    // 设备选择器使用
    const range = useMemo(() => {
        return deviceList.map((item) => item.deviceName)
    }, [deviceList])
    // 提交申请
    const apply = () => {
        const params = { deviceCode, startTime, endTime, reason }
        request('device/use/apply', params).then((res) => {
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
        <View className="deviceApply">
            <SelectCom
                label="设备选择"
                placeholder="请选择设备"
                range={range}
                date={deviceName}
                onInput={(e) => {
                    setDeviceCode(deviceList[e.detail.value].deviceCode)
                    setDeviceName(deviceList[e.detail.value].deviceName)
                }}
            />
            <PickerCom
                label="借用起始时间"
                placeholder="请选择开始时间"
                date={startTime}
                onInput={(e) => {
                    setStartTime(e.detail.value)
                }}
            />
            <PickerCom
                label="借用结束时间"
                placeholder="请选择结束时间"
                date={endTime}
                onInput={(e) => {
                    setEndTime(e.detail.value)
                }}
            />
            <TextareaCom
                label="申请理由"
                placeholder="请输入申请理由"
                value={reason}
                onInput={(e) => {
                    setReason(e.detail.value)
                }}
            />
            <Button className="deviceApply-save" onClick={apply}>
                提交申请
            </Button>
        </View>
    )
}
export default DeviceApply
