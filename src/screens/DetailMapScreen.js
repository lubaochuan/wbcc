import React from "react"
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon,
  Title, Button, Text } from "native-base"

export default class MapScreen extends React.Component {
  render() {
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
        <Content padder>
          <Card>
            <CardItem>
              <Icon active name="paper-plane" />
              <Text>Map Screen</Text>
              <Right>
                <Icon name="close" />
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}
