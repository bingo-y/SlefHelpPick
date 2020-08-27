import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'

import './index.scss'

export default class OptionItem extends Component {

    constructor (props) {
        super(props)
      }

    render () {
        return (
            <View className='content'>
                <Image className='icon' src={this.props.path} />
                <Text className='des'>
                {this.props.content}
                </Text>
            </View>
        )
    }
}