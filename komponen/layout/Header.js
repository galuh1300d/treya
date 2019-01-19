import React from 'react'
import {View, Image, TouchableOpacity, Text} from 'react-native'
import BootstrapStyleSheet from 'react-native-bootstrap-styles'
import { Actions } from 'react-native-router-flux'

const bootstrapStyleSheet = new BootstrapStyleSheet()
const s = styles = bootstrapStyleSheet.create()

const Header = () => {
  return (
    <View 
    style={[{backgroundColor: 'white'}, s.justifyContentCenter, s.py3]}>
      <View style={[s.flexRow]}>
        <TouchableOpacity onPress={() => {Actions.drawer()}}>
          <Image
            style={[{width: 40, height: 40}, s.mt1, s.ml3]}
            source={require('../assets/backIcon.png')}
          />
        </TouchableOpacity>
        <View style={[s.alignSelfCenter, s.ml4]}>
          <Text style={{fontSize: 20}}>Open Trip Detail</Text>
        </View>
      </View>
    </View>
  )
}

export default Header
