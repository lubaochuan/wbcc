import React from "react"
import { Image, Dimensions } from "react-native"
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon,
  Title, Button, Text, List, ListItem } from "native-base"
import { Grid, Row } from "react-native-easy-grid"
import {screens} from '../../data/contents.js'

const dimensions = Dimensions.get('window')
// set height to 20% (1/5) of screen height
const imageHeight = dimensions.height/5

export default class RecreationScreen extends React.Component {
  render() {
    console.log(JSON.stringify(screens.recreation.links))

    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>{screens.recreation.title}</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Image
            resizeMode={'cover'}
            style={{width: '100%', height: imageHeight}}
            source={require('../../assets/recreation.jpg')}/>
          {screens.recreation.items.map((item, index) => (
          <Card key={index}>
            <CardItem header bordered>
              <Text>{item.header}</Text>
            </CardItem>
            <CardItem bordered>
              <Body><Text>{item.body}</Text></Body>
            </CardItem>
          </Card>))}
          {screens.recreation.links.map((link, index) => (
          <Button full iconRight key={index}
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("DetailScreen", screens[link.route])}>
            <Text>{link.text}</Text>
            <Icon active name="arrow-forward" />
          </Button>))}
        </Content>
      </Container>
    )
  }
}