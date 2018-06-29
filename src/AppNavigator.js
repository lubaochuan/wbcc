import React, { Component } from "react"
import HomeScreen from "./screens/HomeScreen.js"
import Accommodations from "./screens/Accommodations.js"
import MapScreen from "./screens/MapScreen.js"
import Dining from "./screens/Dining.js"
import Recreation from "./screens/Recreation.js"
import DetailScreen from "./screens/DetailScreen.js"
import CampusMap from "./screens/CampusMap.js"
import Policies from "./screens/Policies.js"
import Contact from "./screens/Contact.js"
import { createDrawerNavigator, createStackNavigator } from "react-navigation"

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Accommodations: { screen: Accommodations },
    MapScreen: { screen: MapScreen },
    Dining: { screen: Dining },
    Recreation: { screen: Recreation },
    DetailScreen: { screen: DetailScreen },
    CampusMap: { screen: CampusMap },
    Policies: { screen: Policies },
    Contact: { screen: Contact }
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
)

export default AppNavigator
