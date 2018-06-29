import React from "react"
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon,
  Title, Button, Text, View } from "native-base"
import { MapView } from "expo"
import { findScreenByRoute } from '../common'
import { connect } from 'react-redux'

class CampusMap extends React.Component {
  render() {
    // find screens with map info
    let screens_w_map = this.props.screens.filter((screen)=>screen.map)
    this.initialRegion = screens_w_map[0].map.initialRegion

    // extract markers into an array
    let markers_arrays = screens_w_map.map((obj)=>obj.map.markers)
    this.markers = [].concat.apply([], markers_arrays)

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => {
              console.log("back button pressed")
              this.props.navigation.goBack()}}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title><Text>Campus</Text></Title>
          </Body>
          <Right />
        </Header>
        <View style={{flex: 1}}>
        <MapView
          initialRegion={this.initialRegion}
          showsUserLocation={true}
          style={{flex: 1}}
          mapType='hybrid'>
          {this.markers.map((marker, index) =>
          <MapView.Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}>
          </MapView.Marker>)}
        </MapView>
        </View>
      </Container>)
  }
}

const mapStateToProps = state => {
  return {
    screens: state.screens
  }
}

export default connect(mapStateToProps)(CampusMap)
