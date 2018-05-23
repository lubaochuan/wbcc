import React, { Component } from "react"
import RecreationScreen from "./RecreationScreen.js"
import MapScreen from "../MapScreen.js"
import { createDrawerNavigator } from "react-navigation"

export default (RecreationScreenNavigator = createDrawerNavigator({
  Recreation: { screen: RecreationScreen },
  Map: { screen: MapScreen }
}))
