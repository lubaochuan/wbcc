import React from "react"
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon,
  Title, Button, Text, View } from "native-base"
import { MapView } from "expo"
import {screens} from '../../data/contents.js'

export default class CampusMap extends React.Component {
  constructor(){
    super()
    // find screens with map info
    let screens_w_map = screens.filter((screen)=>screen.map)
    this.initialRegion = screens_w_map[0].map.initialRegion

    // extract markers into an array
    let markers_arrays = screens_w_map.map((obj)=>obj.map.markers)
    this.markers = [].concat.apply([], markers_arrays)
  }

  render() {
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
