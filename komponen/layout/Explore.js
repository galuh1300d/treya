import React from 'react'
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native'
import BootstrapStyleSheet from 'react-native-bootstrap-styles'
import { Actions } from 'react-native-router-flux'
import Header from './Header'

const bootstrapStyleSheet = new BootstrapStyleSheet()
const s = styles = bootstrapStyleSheet.create()

const Explore = () => {
  return (
    <View>
      <Header py={s.py0}>
        <Image
          style={[{width: 50, height: 50}, s.mt1]}
          source={require('../assets/iconWhite.png')}
        />
      </Header>
    </View>
  )
}

export default Explore
