import React from "react";
import { Container, Content, Icon, Text } from "native-base";

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

const ListCard = () => {
  const shuffleCards = cards => {
    const array = [...cards];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const cards = () => {

  };

  return (
    <Container>
      {cards.map((card, index) => (
        <Icon {...card} />
      ))}
    </Container>
  );
};

export default ListCard;
