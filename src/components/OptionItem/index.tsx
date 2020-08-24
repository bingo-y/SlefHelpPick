import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'

import './index.css'
import Rain from '../../images/ic_rain.png'

export default class OptionItem extends Component {


    render () {
        return (
            <View className='content'>
                <Image className='icon' src={Rain} />
                <Text className='des'>
                    下雨
                </Text>
            </View>
        )
    }
}