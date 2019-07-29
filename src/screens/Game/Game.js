import React from "react";
import { Container, Content, Icon, Text } from "native-base";

const Game = () => {
  const cards = [
    { name: "css3", type: "Foundation", style: { color: "blue" } },
    { name: "html5", type: "Foundation", style: { color: "orange" } },
    {
      name: "language-javascript",
      type: "MaterialCommunityIcons",
      style: { color: "yellow" }
    },
    {
      name: "android1",
      type: "AntDesign",
      style: { color: "green" }
    },
    {
      name: "react",
      type: "FontAwesome5",
      style: { color: "blue" }
    },
    {
      name: "visual-studio",
      type: "MaterialCommunityIcons",
      style: { color: "blue" }
    }
  ];

  return (
    <Container>
      <Content>
        {cards.map((card, index) => (
          <Icon {...card} />
        ))}
      </Content>
    </Container>
  );
};

Game.navigationOptions = {
  title: "Game"
};

export default Game;
