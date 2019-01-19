import React, {Component} from 'react'
import { Scene, Router, Actions, Drawer, Tabs, Stack } from 'react-native-router-flux'
import { View, Image, Text } from 'react-native'
import Home from './komponen/layout/Home'
import DrawerContent from './komponen/layout/DrawerContent'

const ExploreIcon = () => {
  return (
    <Image source={require('./komponen/assets/ExploreIcon.png')} style={{width: 60, height: 60, marginTop: 10}} />
  )
}

const PlanIcon = () => {
  return (
    <Image source={require('./komponen/assets/PlanIcon.png')} style={{width: 60, height: 60, marginTop: 10}} />
  )
}

const OpenTripIcon = () => {
  return (
    <Image source={require('./komponen/assets/OpenTripIcon.png')} style={{width: 60, height: 60, marginTop: 10}} />
  )
}

export default class App extends Component {
  render() {
    return (
      <Router navigationBarStyle={{ backgroundColor: '#60c0f9'}} titleStyle={{color: 'white'}}>
        <Scene key="root" hideNavBar>
          <Scene 
            key="main" hideNavBar tabs showLabel={false}
            tabBarStyle={{paddingTop:35, paddingBottom:40}} 
          >
            <Scene key="explore" hideNavBar component={Home} icon={ExploreIcon} />
            <Scene key="plan" hideNavBar component={Home} icon={PlanIcon} />
            <Scene key="opentrip" hideNavBar component={Home} icon={OpenTripIcon} />
          </Scene>
        </Scene>
      </Router>
    );
  }
}