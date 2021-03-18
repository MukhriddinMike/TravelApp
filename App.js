import React from 'react'
import AppNavigator from './src/navigations/Navigator'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default class App extends React.Component {
  state = {
    isFontLoaded: false,
  }
  async componentDidMount() {
    await Font.loadAsync({
      RobotoBold: require('./src/fonts/Roboto-Bold.ttf'),
      RobotoRegular: require('./src/fonts/Roboto-Regular.ttf'),
    })
    this.setState({ isFontLoaded: true })
  }
  render() {
    return this.state.isFontLoaded === true ? <AppNavigator /> : <AppLoading />
  }
}
