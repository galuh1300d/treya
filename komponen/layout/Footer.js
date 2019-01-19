import React from 'react'
import {View, Image, TouchableOpacity, Text} from 'react-native'
import BootstrapStyleSheet from 'react-native-bootstrap-styles'
import { Actions } from 'react-native-router-flux'

const bootstrapStyleSheet = new BootstrapStyleSheet()
const s = styles = bootstrapStyleSheet.create()

const Footer = ({Harga, HargaCoret}) => {
  return (
    <View 
    style={[{
      backgroundColor: 'white', position: 'absolute', left: 0, right: 0, bottom: 0
    }, 
    s.justifyContentCenter, s.py2]}>
      <View style={[s.flexRow, {justifyContent: 'space-between'}, s.alignItemsCenter, s.mx3]}>
        <View>
          <Text 
          style={[{fontSize: 11, textDecorationLine: 'line-through', textDecorationStyle: 'solid'}]}
          >Rp. {HargaCoret} / Orang</Text>
          <Text style={[s.textDanger, {fontSize: 14}]}>Rp. {Harga} / Orang</Text>
        </View>
        <TouchableOpacity style={[s.btn, s.px4, s.py3, {backgroundColor: '#65b6e5'}]}><Text style={[s.textWhite]}>Back</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default Footer
