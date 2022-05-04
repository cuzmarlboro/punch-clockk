import React from 'react'
import { View, Picker } from '@tarojs/components'
import './SelectCom.scss'

const SelectCom = (props) => {
    const { label, placeholder, date, onInput, disabled, range } = props

    return (
        <View className="selectCom">
            <View className="label">{label}</View>
            <Picker
                mode="selector"
                onChange={onInput}
                disabled={disabled}
                range={range}
            >
                {!date ? (
                    <View className="picker placeholder">{placeholder}</View>
                ) : (
                    <View className="picker">{date}</View>
                )}
            </Picker>
        </View>
    )
}
export default SelectCom
