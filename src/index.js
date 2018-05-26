import React, { Component } from "react"
import HomeScreen from "./screens/HomeScreen.js"
import RecreationScreen from "./screens/RecreationScreen.js"
import MapScreen from "./screens/MapScreen.js"
import DetailScreen from "./screens/DetailScreen.js"
import SideBar from "./SideBar.js"
import { createDrawerNavigator, createStackNavigator } from "react-navigation"

const Drawer = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Recreation: { screen: RecreationScreen },
    Map: { screen: MapScreen }
  },
  {
    initialRouteName: "Home",
    contentComponent: props => <SideBar {...props} />
  }
)

const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer },
    Home: { screen: HomeScreen },
    Recreation: { screen: RecreationScreen },
    Map: { screen: MapScreen },
    DetailScreen: { screen: DetailScreen }
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
)

export default AppNavigator
