import React from 'react'
import { View, Textarea } from '@tarojs/components'
import './TextareaCom.scss'

const LinputCom = (props) => {
    const { label, placeholder, value, onInput, type, disabled } = props

    return (
        <View className="TextareaCom">
            <View className="label">{label}</View>
            <Textarea
                placeholder={placeholder}
                value={value}
                type={type}
                placeholderClass="input-ph"
                className="textarea"
                disabled={disabled}
                onInput={(e) => {
                    onInput(e)
                }}
            />
        </View>
    )
}
export default LinputCom
