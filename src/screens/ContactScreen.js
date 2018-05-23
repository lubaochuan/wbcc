import React from "react"
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon,
  Title, Button, Text } from "native-base"

export default class ContactScreen extends React.Component {
  render() {
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
            <Title>Contact</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Icon active name="paper-plane" />
              <Text>Contact Screen</Text>
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
