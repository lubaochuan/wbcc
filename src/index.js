import React, { Component } from "react"
import HomeScreen from "./screens/HomeScreen.js"
import FacilityScreen from "./screens/FacilityScreen.js"
import DiningScreen from "./screens/DiningScreen.js"
import RecreationScreen from "./screens/RecreationScreen.js"
import MapScreen from "./screens/MapScreen.js"
import DetailMapScreen from "./screens/DetailMapScreen.js"
import PolicyScreen from "./screens/PolicyScreen.js"
import ContactScreen from "./screens/ContactScreen.js"
import SideBar from "./SideBar.js"
import { createDrawerNavigator, createStackNavigator } from "react-navigation"

const Drawer = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Facility: { screen: FacilityScreen },
    Dining: { screen: DiningScreen },
    Recreation: { screen: RecreationScreen },
    Map: { screen: MapScreen },
    Policies: { screen: PolicyScreen },
    Contact: { screen: ContactScreen }
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
    Facility: { screen: FacilityScreen },
    Dining: { screen: DiningScreen },
    Recreation: { screen: RecreationScreen },
    DetailMap: { screen: DetailMapScreen },
    Policies: { screen: PolicyScreen },
    Contact: { screen: ContactScreen }
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
)

export default AppNavigator
