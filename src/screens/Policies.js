import React from 'react'
import { Image, Dimensions } from 'react-native'
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon,
  Title, Button, Text } from 'native-base'
import { findScreenByRoute } from '../common'
import { connect } from 'react-redux'

const dimensions = Dimensions.get('window')
const imageHeight = dimensions.height/5

class Plocies extends React.Component {
  render() {
    let screen = findScreenByRoute(this.props.screens, 'Policies')

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
            source={require('../../assets/policy.jpg')}/>
          {screen.items != null &&
            screen.items.map((item, index) => (
            <Card key={index}>
              <CardItem header bordered>
                <Text>{item.header}</Text>
              </CardItem>
              <CardItem>
                <Body><Text>{item.body}</Text></Body>
              </CardItem>
            </Card>))}
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

export default connect(mapStateToProps)(Plocies)
