import React, { Component } from 'react'
import {Text, View, Image, TouchableOpacity, TouchableHighlight, ScrollView, ImageBackground} from 'react-native'
import BootstrapStyleSheet from 'react-native-bootstrap-styles'
import { Actions } from 'react-native-router-flux'
import Header from './Header'
import Footer from './Footer'
import Axios from 'axios';

const bootstrapStyleSheet = new BootstrapStyleSheet()
const s = styles = bootstrapStyleSheet.create()

class OpenTripDetail extends Component {
    
  state = {
    panah1: true,
    panah2: true,
    panah3: true,
    panah4: true,
    panah5: true,
    panah6: true,
    panah7: true,
    panah8: true,
    panah9: true,
    panah10: true,
    Highlights: '',
    HargaTermasuk: '',
    HargaTidakTermasuk: '',
    Catatan: '',
    MeetingPoint: '',
    Terms: '',
    Harga: '',
    HargaCoret: '',
    Poster: ''
  }

  componentDidMount() {
    Axios.get('https://82ea8ac2-7d52-4d7a-bd26-e7ac348ccbcd.mock.pstmn.io/treyatrip')
      .then(res => {
        this.setState({
          Highlights: res.data.data.trip.highlights,
          HargaTermasuk: res.data.data.trip.include,
          HargaTidakTermasuk: res.data.data.trip.exclude,
          Catatan: res.data.data.trip.equipments,
          MeetingPoint: res.data.data.trip.meeting_point,
          Terms: res.data.data.trip.terms,
          Harga: res.data.data.trip.price,
          HargaCoret: res.data.data.trip.m_price,
          Poster: res.data.data.poster[0].poster
        })
      })
  }

  render(){
    return (
      <View style={[s.h100]}>
        <Header/>
        <ScrollView>
          <ImageBackground 
            source={{uri:this.state.Poster}} 
            style={[s.alignItemsCenter, {justifyContent: 'space-between', height: 600}]}
          >
          </ImageBackground>
          <View style={[s.mx4]}>
            <Text style={[{fontSize: 38}, s.my4]}>Exploring Sumba</Text>

            <View style={{borderBottomColor: 'black', borderBottomWidth: 1}}></View>
            <View style={[s.flexRow, s.my3, s.alignItemCenter, {justifyContent: 'space-between', alignItems: 'center'}]}>
              <Text>Highlights</Text>
              <TouchableOpacity onPress={() => {this.setState({panah1: !this.state.panah1})}}>
                {(this.state.panah1) ?
                <Image
                  style={[{width: 20, height: 20}, s.mt1, s.ml3]}
                  source={require('../assets/downIcon.png')}
                />
                :
                <Image
                  style={[{width: 20, height: 20}, s.mt1, s.ml3]}
                  source={require('../assets/upIcon.png')}
                />
                }
              </TouchableOpacity>
            </View>
            {(this.state.panah1) ? 
            <View></View>
            :
            <Text style={[s.mb2]}>{this.state.Highlights}</Text>
            }

<View style={{borderBottomColor: 'black', borderBottomWidth: 1}}></View>
<View style={[s.flexRow, s.my3, s.alignItemCenter, {justifyContent: 'space-between', alignItems: 'center'}]}>
              <Text>Harga</Text>
              <TouchableOpacity onPress={() => {this.setState({panah2: !this.state.panah2})}}>
                {(this.state.panah2) ?
                <Image
                  style={[{width: 20, height: 20}, s.mt1, s.ml3]}
                  source={require('../assets/downIcon.png')}
                />
                :
                <Image
                  style={[{width: 20, height: 20}, s.mt1, s.ml3]}
                  source={require('../assets/upIcon.png')}
                />
                }
              </TouchableOpacity>
            </View>
            {(this.state.panah2) ? 
            <View></View>
            :
            <Text style={[s.mb2]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestiae, deleniti officia, aspernatur libero laboriosam cumque aperiam ut quibusdam porro, illum facilis nulla repellat. Eaque accusamus nesciunt inventore quidem doloremque.Nam blanditiis doloremque quo commodi obcaecati molestias officia consequuntur vitae possimus, quis temporibus, optio expedita. Iusto voluptatibus mollitia veniam error, sed earum harum labore officia iste! Odit magnam iure quas.</Text>
            }

<View style={{borderBottomColor: 'black', borderBottomWidth: 1}}></View>
<View style={[s.flexRow, s.my3, s.alignItemCenter, {justifyContent: 'space-between', alignItems: 'center'}]}>
              <Text>Itinerary</Text>
              <TouchableOpacity onPress={() => {this.setState({panah3: !this.state.panah3})}}>
                {(this.state.panah3) ?
                <Image
                  style={[{width: 20, height: 20}, s.mt1, s.ml3]}
                  source={require('../assets/downIcon.png')}
                />
                :
                <Image
                  style={[{width: 20, height: 20}, s.mt1, s.ml3]}
                  source={require('../assets/upIcon.png')}
                />
                }
              </TouchableOpacity>
            </View>
            {(this.state.panah3) ? 
            <View></View>
            :
            <Text style={[s.mb2]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestiae, deleniti officia, aspernatur libero laboriosam cumque aperiam ut quibusdam porro, illum facilis nulla repellat. Eaque accusamus nesciunt inventore quidem doloremque.Nam blanditiis doloremque quo commodi obcaecati molestias officia consequuntur vitae possimus, quis temporibus, optio expedita. Iusto voluptatibus mollitia veniam error, sed earum harum labore officia iste! Odit magnam iure quas.</Text>
            }

<View style={{borderBottomColor: 'black', borderBottomWidth: 1}}></View>
<View style={[s.flexRow, s.my3, s.alignItemCenter, {justifyContent: 'space-between', alignItems: 'center'}]}>
              <Text>Harga Termasuk</Text>
              <TouchableOpacity onPress={() => {this.setState({panah4: !this.state.panah4})}}>
                {(this.state.panah4) ?
                <Image
                  style={[{width: 20, height: 20}, s.mt1, s.ml3]}
                  source={require('../assets/downIcon.png')}
                />
                :
                <Image
                  style={[{width: 20, height: 20}, s.mt1, s.ml3]}
                  source={require('../assets/upIcon.png')}
                />
                }
              </TouchableOpacity>
            </View>
            {(this.state.panah4) ? 
            <View></View>
            :
            <Text style={[s.mb2]}>{this.state.HargaTermasuk}</Text>
            }

<View style={{borderBottomColor: 'black', borderBottomWidth: 1}}></View>
<View style={[s.flexRow, s.my3, s.alignItemCenter, {justifyContent: 'space-between', alignItems: 'center'}]}>
              <Text>Harga Tidak Termasuk</Text>
              <TouchableOpacity onPress={() => {this.setState({panah5: !this.state.panah5})}}>
                {(this.state.panah5) ?
                <Image
                  style={[{width: 20, height: 20}, s.mt1, s.ml3]}
                  source={require('../assets/downIcon.png')}
                />
                :
                <Image
                  style={[{width: 20, height: 20}, s.mt1, s.ml3]}
                  source={require('../assets/upIcon.png')}
                />
                }
              </TouchableOpacity>
            </View>
            {(this.state.panah5) ? 
            <View></View>
            :
            <Text style={[s.mb2]}>{this.state.HargaTidakTermasuk}</Text>
            }

<View style={{borderBottomColor: 'black', borderBottomWidth: 1}}></View>
<View style={[s.flexRow, s.my3, s.alignItemCenter, {justifyContent: 'space-between', alignItems: 'center'}]}>
              <Text>Kesulitan </Text>
              <TouchableOpacity onPress={() => {this.setState({panah6: !this.state.panah6})}}>
                {(this.state.panah6) ?
                <Image
                  style={[{width: 20, height: 20}, s.mt1, s.ml3]}
                  source={require('../assets/downIcon.png')}
                />
                :
                <Image
                  style={[{width: 20, height: 20}, s.mt1, s.ml3]}
                  source={require('../assets/upIcon.png')}
                />
                }
              </TouchableOpacity>
            </View>
            {(this.state.panah6) ? 
            <View></View>
            :
            <Text style={[s.mb2]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestiae, deleniti officia, aspernatur libero laboriosam cumque aperiam ut quibusdam porro, illum facilis nulla repellat. Eaque accusamus nesciunt inventore quidem doloremque.Nam blanditiis doloremque quo commodi obcaecati molestias officia consequuntur vitae possimus, quis temporibus, optio expedita. Iusto voluptatibus mollitia veniam error, sed earum harum labore officia iste! Odit magnam iure quas.</Text>
            }

<View style={{borderBottomColor: 'black', borderBottomWidth: 1}}></View>
<View style={[s.flexRow, s.my3, s.alignItemCenter, {justifyContent: 'space-between', alignItems: 'center'}]}>
              <Text>Catatan</Text>
              <TouchableOpacity onPress={() => {this.setState({panah7: !this.state.panah7})}}>
                {(this.state.panah7) ?
                <Image
                  style={[{width: 20, height: 20}, s.mt1, s.ml3]}
                  source={require('../assets/downIcon.png')}
                />
                :
                <Image
                  style={[{width: 20, height: 20}, s.mt1, s.ml3]}
                  source={require('../assets/upIcon.png')}
                />
                }
              </TouchableOpacity>
            </View>
            {(this.state.panah7) ? 
            <View></View>
            :
            <Text style={[s.mb2]}>{this.state.Catatan}</Text>
            }

<View style={{borderBottomColor: 'black', borderBottomWidth: 1}}></View>
<View style={[s.flexRow, s.my3, s.alignItemCenter, {justifyContent: 'space-between', alignItems: 'center'}]}>
              <Text>Meeting Point</Text>
              <TouchableOpacity onPress={() => {this.setState({panah8: !this.state.panah8})}}>
                {(this.state.panah8) ?
                <Image
                  style={[{width: 20, height: 20}, s.mt1, s.ml3]}
                  source={require('../assets/downIcon.png')}
                />
                :
                <Image
                  style={[{width: 20, height: 20}, s.mt1, s.ml3]}
                  source={require('../assets/upIcon.png')}
                />
                }
              </TouchableOpacity>
            </View>
            {(this.state.panah8) ? 
            <View></View>
            :
            <Text style={[s.mb2]}>{this.state.MeetingPoint}</Text>
            }

<View style={{borderBottomColor: 'black', borderBottomWidth: 1}}></View>
<View style={[s.flexRow, s.my3, s.alignItemCenter, {justifyContent: 'space-between', alignItems: 'center'}]}>
              <Text>Terms</Text>
              <TouchableOpacity onPress={() => {this.setState({panah9: !this.state.panah9})}}>
                {(this.state.panah9) ?
                <Image
                  style={[{width: 20, height: 20}, s.mt1, s.ml3]}
                  source={require('../assets/downIcon.png')}
                />
                :
                <Image
                  style={[{width: 20, height: 20}, s.mt1, s.ml3]}
                  source={require('../assets/upIcon.png')}
                />
                }
              </TouchableOpacity>
            </View>
            {(this.state.panah9) ? 
            <View></View>
            :
            <Text style={[s.mb2]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestiae, deleniti officia, aspernatur libero laboriosam cumque aperiam ut quibusdam porro, illum facilis nulla repellat. Eaque accusamus nesciunt inventore quidem doloremque.Nam blanditiis doloremque quo commodi obcaecati molestias officia consequuntur vitae possimus, quis temporibus, optio expedita. Iusto voluptatibus mollitia veniam error, sed earum harum labore officia iste! Odit magnam iure quas.</Text>
            }

<View style={{borderBottomColor: 'black', borderBottomWidth: 1}}></View>
<View style={[s.flexRow, s.my3, s.alignItemCenter, {justifyContent: 'space-between', alignItems: 'center'}]}>
              <Text>Kebijakan Pembatalan</Text>
              <TouchableOpacity onPress={() => {this.setState({panah10: !this.state.panah10})}}>
                {(this.state.panah10) ?
                <Image
                  style={[{width: 20, height: 20}, s.mt1, s.ml3]}
                  source={require('../assets/downIcon.png')}
                />
                :
                <Image
                  style={[{width: 20, height: 20}, s.mt1, s.ml3]}
                  source={require('../assets/upIcon.png')}
                />
                }
              </TouchableOpacity>
            </View>
            {(this.state.panah10) ? 
            <View></View>
            :
            <Text style={[s.mb2]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestiae, deleniti officia, aspernatur libero laboriosam cumque aperiam ut quibusdam porro, illum facilis nulla repellat. Eaque accusamus nesciunt inventore quidem doloremque.Nam blanditiis doloremque quo commodi obcaecati molestias officia consequuntur vitae possimus, quis temporibus, optio expedita. Iusto voluptatibus mollitia veniam error, sed earum harum labore officia iste! Odit magnam iure quas.</Text>
            }
          </View>
          <View style={[s.my5, s.py1]}></View>
        </ScrollView>
        <Footer Harga={this.state.Harga} HargaCoret={this.state.HargaCoret}/>
      </View>
    )
  }
}

export default OpenTripDetail
