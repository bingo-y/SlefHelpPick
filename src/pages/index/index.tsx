import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { AtGrid, AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
// import "taro-ui/dist/style/components/flex.scss"; // flex布局
// import "taro-ui/dist/style/components/grid.scss"; // grid
import './index.scss'
import OptionItem from '../../components/OptionItem'
import Rain from '../../images/ic_rain.png'
import Seam1 from '../../images/ic_seam1.jpg'
import Seam2 from '../../images/ic_seam2.jpg'
import Seam3 from '../../images/ic_seam3.jpg'
import Seam4 from '../../images/ic_seam4.jpg'
import Seam5 from '../../images/ic_seam5.jpg'
import Seam6 from '../../images/ic_seam6.jpg'
import Tile1 from '../../images/ic_tile1.jpg'
import Tile2 from '../../images/ic_tile2.jpg'
import Tile3 from '../../images/ic_tile3.jpg'
import Tile4 from '../../images/ic_tile4.jpg'
import Tile5 from '../../images/ic_tile5.jpg'
import Tile6 from '../../images/ic_tile6.jpg'
import Tile7 from '../../images/ic_tile7.jpg'
import Tile8 from '../../images/ic_tile8.jpg'
import Tile9 from '../../images/ic_tile9.jpg'
import Tile10 from '../../images/ic_tile10.jpg'
import Tile11 from '../../images/ic_tile11.jpg'
import Tile12 from '../../images/ic_tile12.jpg'
import Tile13 from '../../images/ic_tile3.jpg'
import Tile14 from '../../images/ic_tile14.jpg'

export default class Index extends Component {

  constructor () {
    super()
    this.state = {
      seamList: [
        {
          image: Seam1,
          name: '瓷白'
        },
        {
          image: Seam2,
          name: '贵族银'
        },
        {
          image: Seam3,
          name: '珍珠黑'
        },
        {
          image: Seam4,
          name: '咖啡棕'
        },
        {
          image: Seam5,
          name: '镏金'
        },
        {
          image: Seam6,
          name: '贵族金'
        }
      ],
      tileList: [Tile1, Tile2, Tile3, Tile4, Tile5, Tile6, Tile7, Tile8, Tile9, Tile10, Tile11, Tile12, Tile13, Tile14],
      displaySeam: Seam1,
      displayTile: Tile1
    }
  }

  handleOnSeamClick (seam) {
    this.setState({
      displaySeam: seam
    })
  }

  handleOnTileClick (tile) {
    this.setState({
      displayTile: tile
    })
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
        <View>选择美缝颜色</View>
        <View className='seam-flex'>
        {this.state.seamList.map(({image, name}) => <Image className='seam' src={image} onClick={this.handleOnSeamClick.bind(this, image)} />)}
          {/* {this.state.seamList.map(({image, name}) => 
          <OptionItem className='seam' path={image} content={name} onClick={this.handleOnSeamClick.bind(this, image)} />)} */}
        </View>
        <View>选择瓷砖</View>
        <View className='tile-flex'>
          {this.state.tileList.map((tile) => <Image className='tile' src={tile} onClick={this.handleOnTileClick.bind(this, tile)} />)}
        </View>
        <View>效果预览：</View>
        <View className='square' style={{backgroundImage: `url(${this.state.displaySeam})`}}>
          <View className='square-inner flex'>
            <Image src={this.state.displayTile} />
            <Image src={this.state.displayTile} />
            <Image src={this.state.displayTile} />
            <Image src={this.state.displayTile} />
            <Image src={this.state.displayTile} />
            <Image src={this.state.displayTile} />
            <Image src={this.state.displayTile} />
            <Image src={this.state.displayTile} />
            <Image src={this.state.displayTile} />
          </View>
        </View>
      </View>
      
    )
  }
}
