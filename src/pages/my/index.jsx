import React, { useEffect, useState } from 'react'
import { View, Button, Icon } from '@tarojs/components'
import InputCom from 'component/InputCom/InputCom'
import request from 'service/request'
import getUser from 'util/getUser'
import successToast from 'util/successToast'
import './index.scss'

const My = () => {
    const [isDisabled, setIsDisabled] = useState(true)
    const [data, setData] = useState({
        title: '',
        username: '',
        department: '',
        title: '',
    })
    // 获取用户信息
    useEffect(() => {
        const getData = async () => {
            const initData = await getUser()
            setData({ ...initData })
        }
        getData()
    }, [])
    // 编辑or保存
    const edit = () => {
        if (isDisabled) {
            setIsDisabled(false)
        } else {
            console.log('data', data)
            request('user/edit', data).then((res) => {
                console.log(res)
                if (res.code === 200) {
                    successToast('保存成功')
                    setIsDisabled(true)
                }
            })
        }
    }
    const onInput = (event, type) => {
        console.log(event, type)
        let newData = { ...data }
        newData[type] = event.detail.value
        setData(newData)
    }
    return (
        <View className="taskForm">
            <View className="taskForm-tips">
                <Icon size="14" type="info" className="taskForm-info" />
                请您仔细检查好个人信息，如有修改，可点击下方编辑按钮
            </View>
            <InputCom
                label="姓名"
                placeholder="请输入起始地"
                disabled={isDisabled}
                value={data.username}
                onInput={(e) => {
                    onInput(e, 'username')
                }}
            />
            <InputCom
                label="工号"
                placeholder="请输入目的地"
                value={data.userNumber}
                disabled={isDisabled}
                onInput={(e) => {
                    onInput(e, 'userNumber')
                }}
            />
            <InputCom
                label="部门"
                placeholder="请选择部门"
                type="number"
                value={data.department}
                disabled={isDisabled}
                onInput={(e) => {
                    onInput(e, 'department')
                }}
            />
            <InputCom
                label="职位"
                placeholder="请输入货物信息"
                value={data.title}
                disabled={isDisabled}
                onInput={(e) => {
                    onInput(e, 'title')
                }}
            />

            <Button
                className="taskForm-save"
                onClick={() => {
                    edit()
                }}
            >
                {isDisabled ? '编辑个人信息' : '保存'}
            </Button>
        </View>
    )
}
export default My
