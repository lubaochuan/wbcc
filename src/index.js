import React, { Component } from "react"
import HomeScreen from "./screens/HomeScreen.js"
import Accommodations from "./screens/Accommodations.js"
import MapScreen from "./screens/MapScreen.js"
import Dining from "./screens/Dining.js"
import Recreation from "./screens/Recreation.js"
import DetailScreen from "./screens/DetailScreen.js"

import { createDrawerNavigator, createStackNavigator } from "react-navigation"

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Accommodations: { screen: Accommodations },
    MapScreen: { screen: MapScreen },
    Dining: { screen: Dining },
    Recreation: { screen: Recreation },
    DetailScreen: { screen: DetailScreen }
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
)

export default AppNavigator
