import React from "react";
import { Container, Content, Icon, Text } from "native-base";
import { ListCard } from "../../components";
const Game = () => {
  return (
    <Container>
      <Content>
        <ListCard />
      </Content>
    </Container>
  );
};

Game.navigationOptions = {
  title: "Game"
};

export default Game;
