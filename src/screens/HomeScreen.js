import React from "react"
import { Image, Dimensions } from "react-native"
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon,
  Title, Button, Text, List, ListItem } from "native-base"
import { Grid, Row } from "react-native-easy-grid"
import {screens, findScreenByRoute} from '../../data/contents.js'

const dimensions = Dimensions.get('window')
// set height to 20% (1/5) of screen height
const imageHeight = dimensions.height/5

export default class HomeScreen extends React.Component {
  render() {
    let screen = findScreenByRoute('Home')
    console.log(JSON.stringify(screen.links))

    return (
      <Container>
        <Header>
          <Body>
            <Title>{screen.title}</Title>
          </Body>
        </Header>
        <Content>
          <Image
            resizeMode={'cover'}
            style={{width: '100%', height: imageHeight}}
            source={require('../../assets/cover.jpg')}/>
          {screen.items.map((item, index) => (
          <Card key={index}>
            <CardItem header bordered>
              <Text>{item.header}</Text>
            </CardItem>
            <CardItem bordered>
              <Body><Text>{item.body}</Text></Body>
            </CardItem>
          </Card>))}
          {screen.links.map((link, index) => (
          <Button full iconRight key={index}
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("MainScreen", findScreenByRoute(link.route))}>
            <Text>{link.text}</Text>
            <Icon active name="arrow-forward" />
          </Button>))}
        </Content>
      </Container>
    )
  }
}
