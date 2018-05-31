import React, { Component } from "react"
import HomeScreen from "./screens/HomeScreen.js"
import MainScreen from "./screens/MainScreen.js"
import MapScreen from "./screens/MapScreen.js"
import DetailScreen from "./screens/DetailScreen.js"
import { createDrawerNavigator, createStackNavigator } from "react-navigation"

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    MainScreen: { screen: MainScreen },
    DetailScreen: { screen: DetailScreen },
    MapScreen: { screen: MapScreen }
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
)

export default AppNavigator
