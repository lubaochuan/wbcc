import React from 'react'
import { Image, Dimensions } from 'react-native'
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon,
  Title, Button, Text, List, ListItem } from 'native-base'
import { findScreenByRoute } from '../common'
import { connect } from 'react-redux'

const dimensions = Dimensions.get('window')
// set height to 20% (1/5) of screen height
const imageHeight = dimensions.height/5

class Recreation extends React.Component {
  render() {
    let screen = findScreenByRoute(this.props.screens, 'Recreation')

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
            source={require('../../assets/recreation.png')}/>
          {screen.items.map((item, index) => (
          <Card key={index}>
            <CardItem header>
              <Text>{item.header}</Text>
            </CardItem>
            <CardItem>
              <Body><Text>{item.body}</Text></Body>
            </CardItem>
          </Card>))}
          {screen.links.map((link, index) => (
          <Button full iconRight key={index}
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("DetailScreen", link.route)}>
            <Text>{link.text}</Text>
            <Icon active name="arrow-forward" />
          </Button>))}
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    screens: state.screens
  }
}

export default connect(mapStateToProps)(Recreation)
