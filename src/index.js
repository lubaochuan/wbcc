import 'expo'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { watchScreensData } from './../redux/app-redux'
import AppNavigator from "./AppNavigator"

class Container extends Component {
  constructor(props) {
    super(props)
    this.props.watchScreensData()
  }

  render() {
    return <AppNavigator />
  }
}

const mapStateToProps = state => {
  return {
    screens: state.screens
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    watchScreensData: () => dispatch(watchScreensData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
