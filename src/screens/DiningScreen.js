import React from "react"
import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon,
  Title, Button, Text } from "native-base"

export default class DiningScreen extends React.Component {
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
            <Title>Dining</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Icon active name="paper-plane" />
              <Text>Dining Screen</Text>
              <Right>
                <Icon name="close" />
              </Right>
            </CardItem>
          </Card>
          <Button full rounded primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("DetailMap")}>
            <Text>Goto Map</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}
