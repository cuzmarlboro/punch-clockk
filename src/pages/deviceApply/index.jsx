import React, { useEffect, useState } from 'react'
import { View, Button, Icon } from '@tarojs/components'
import request from 'service/request'
import PickerCom from 'component/PickerCom/PickerCom'
import TextareaCom from 'component/TextareaCom/TextareaCom'
import SelectCom from 'component/SelectCom/SelectCom'
import './index.scss'

const DeviceApply = () => {
    return (
        <View className="deviceApply">
            <SelectCom
                label="设备选择"
                placeholder="请选择设备"
                range={['美国', '中国', '巴西', '日本']}
                // date={startTime}
                // onInput={(e) => {
                //     setStartTime(e.detail.value)
                // }}
            />
            <PickerCom
                label="借用起始时间"
                placeholder="请选择开始时间"
                // date={startTime}
                // onInput={(e) => {
                //     setStartTime(e.detail.value)
                // }}
            />
            <PickerCom
                label="借用结束时间"
                placeholder="请选择结束时间"
                // date={endTime}
                // onInput={(e) => {
                //     setEndTime(e.detail.value)
                // }}
            />
            <TextareaCom
                label="申请理由"
                placeholder="请输入申请理由"
                // value={reason}
                // onInput={(e) => {
                //     setReason(e.detail.value)
                // }}
            />
            <Button
                className="deviceApply-save"
                // onClick={() => {
                //     leaveAdd()
                // }}
            >
                提交申请
            </Button>
        </View>
    )
}
export default DeviceApply
