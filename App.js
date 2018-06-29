import React, { Component } from 'react'
import 'expo'
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import ApiKeys from './constants/ApiKeys'
import * as firebase from 'firebase'
import { Provider } from 'react-redux'
import { store } from './redux/app-redux'
import Container from './src/index'

export default class AppWithStore extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoadingComplete: false,
      isAuthenticationReady: false,
      isAuthenticated: false,
    }
    // Initialize firebase...
    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig)
    }
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    })
    this.setState({ isLoadingComplete: true })
  }

  render() {
    if (!this.state.isLoadingComplete) {
      return <Expo.AppLoading />
    }
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    )
  }
}
