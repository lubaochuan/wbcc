import React from "react"
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,
  Text, Card, CardItem } from "native-base"

export default class HomeScreen extends React.Component {
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
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Welcome!</Text>
              </Body>
            </CardItem>
          </Card>
          <Button full rounded dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Facility")}>
            <Text>Facilities</Text>
          </Button>
          <Button full rounded primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Dining")}>
            <Text>Dining</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}
