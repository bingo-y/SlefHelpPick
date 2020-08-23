import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'

import './index.css'

export default class OptionItem extends React.Component {


    render () {
        const _img = "../../images/ic_rain.png"
        return (
            <View className='content'>
                <Image className='icon' src={_img} />
                <Text className='des'>
                    下雨
                </Text>
            </View>
        )
    }
}