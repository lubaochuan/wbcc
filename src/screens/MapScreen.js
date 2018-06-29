import React from 'react'
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon,
  Title, Button, Text, View } from 'native-base'
import { MapView } from 'expo'

export default class MapScreen extends React.Component {
  render() {
    const map = this.props.navigation.state.params
    //console.log(JSON.stringify(map))
    //console.log(JSON.stringify(this.props.navigation.state))
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
            <Title>Map</Title>
          </Body>
          <Right />
        </Header>
        <View style={{flex: 1}}>
        <MapView
          initialRegion={map.initialRegion}
          showsUserLocation={true}
          style={{flex: 1}}
          mapType='hybrid'>
          {map.markers.map((marker, index) =>
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
