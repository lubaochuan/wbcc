import React from 'react'
import { Image, Dimensions } from 'react-native'
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon,
  Title, Button, Text, List, ListItem } from 'native-base'
import { findScreenByRoute } from '../common'
import { connect } from 'react-redux'

const dimensions = Dimensions.get('window')
// set height to 20% (1/5) of screen height
const imageHeight = dimensions.height/5

class HomeScreen extends React.Component {
  render() {
    if (this.props.screens && this.props.screens.length) {
      return <Expo.AppLoading />
    }else{
      console.log("screens"+JSON.stringify(this.props.screens))
      let screen = findScreenByRoute(this.props.screens, 'Home')
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
              onPress={() =>
                this.props.navigation.navigate(link.route)}>
              <Text>{link.text}</Text>
              <Icon active name="arrow-forward" />
            </Button>))}
          </Content>
        </Container>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    screens: state.screens
  }
}

const mapDispatchToProps = dispatch =>{
  return {}
}

export default connect(mapStateToProps)(HomeScreen)
