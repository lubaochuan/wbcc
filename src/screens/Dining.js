import React from "react"
import { Image, Dimensions } from "react-native"
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon,
  Title, Button, Text } from "native-base"
import { screens, findScreenByRoute } from '../../data/contents.js'

const dimensions = Dimensions.get('window')
const imageHeight = dimensions.height/5

export default class dining extends React.Component {
  render() {
    const {params} = this.props.navigation.state
    const screen = params

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
          <Image
            resizeMode={'cover'}
            style={{width: '100%', height: imageHeight}}
            source={require('../../assets/dining.jpg')}/>
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
          <Button iconLeft full
            style={{ marginTop: 10 }}
            onPress={() => {
              if(screen.map){
                this.props.navigation.navigate("MapScreen", screen.map)
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
