import React from 'react'
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native'
import BootstrapStyleSheet from 'react-native-bootstrap-styles'
import { Actions } from 'react-native-router-flux'
import Header from './Header'

const bootstrapStyleSheet = new BootstrapStyleSheet()
const s = styles = bootstrapStyleSheet.create()

const Home = () => {
  return (
    <View>
      <Header/>
    </View>
  )
}

export default Home
