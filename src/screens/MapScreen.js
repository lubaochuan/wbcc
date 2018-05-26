import React from "react"
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon,
  Title, Button, Text, View } from "native-base"
import { MapView } from "expo"

export default class MapScreen extends React.Component {
  render() {
    const {params} = this.props.navigation.state
    //console.log(JSON.stringify(params))

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
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
          ref={map => this.map = map}
          initialRegion={params.initialRegion}
          showsUserLocation={true}
          style={{flex: 1}}
          mapType='hybrid'>
          {params.markers.map((marker, index) =>
          <MapView.Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}>
          </MapView.Marker>)}
        </MapView>
        </View>
        <Button transparent onPress={() => this.props.navigation.goBack()}>
          <Icon name="arrow-back" />
        </Button>
      </Container>)
  }
}
