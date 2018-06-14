import React from "react"
import { Dimensions } from "react-native"
import { Image } from "react-native-expo-image-cache"
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon,
  Title, Button, Text } from "native-base"
import { screens, findScreenByRoute } from '../../data/contents.js'

const dimensions = Dimensions.get('window')
const imageHeight = dimensions.height/5

export default class MainScreen extends React.Component {
  render() {
    const {params} = this.props.navigation.state
    const screen = params

    const preview = { uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==" };
    const uri = screen.image;


    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{screen.title}</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Image resizeMode={'cover'}
            style={{width: '100%', height: imageHeight}}
            {...{preview, uri}} />
          {screen.items != null &&
            screen.items.map((item, index) => (
            <Card key={index}>
              <CardItem header>
                <Text>{item.header}</Text>
              </CardItem>
              <CardItem>
                <Body><Text>{item.body}</Text></Body>
              </CardItem>
            </Card>))}
          {screen.links != null &&
            screen.links.map((link, index) => (
            <Button full iconRight key={index}
              style={{ marginTop: 10 }}
              onPress={() => this.props.navigation.navigate("DetailScreen", findScreenByRoute(link.route))}>
              <Text>{link.text}</Text>
              <Icon active name="arrow-forward" />
            </Button>))}
          <Button iconLeft full
            style={{ marginTop: 10 }}
            onPress={() => {
              if(screen.map){
                this.props.navigation.navigate("MapScreen", screen.map)
              }else{
                let routes = screen.links.map((obj)=>obj.route)
                //console.log(routes)
                let linked_screens = screens.filter((obj)=>routes.includes(obj.route))
                let markers_arrays = linked_screens.map((obj)=>obj.map.markers)
                let markers = [].concat.apply([], markers_arrays)
                //console.log(markers)
                let initialRegion = linked_screens[0].map.initialRegion
                //console.log(initialRegion)
                let map = {initialRegion, markers}
                console.log(JSON.stringify(map))
                this.props.navigation.navigate("MapScreen", map)
              }
            }}>
            <Icon type="MaterialCommunityIcons" active name="google-maps" />
            <Text>Show on Map</Text>
          </Button>))}
        </Content>
      </Container>
    )
  }
}
