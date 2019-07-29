import React, { useState } from "react";
import { Container } from "native-base";
import Card from "../Card/Card";
import { Wrapper } from "./style";

const defaultCards = [
  {
    name: "css3",
    visible: false,
    type: "Foundation",
    style: { color: "blue", fontSize: 64 }
  },
  {
    name: "html5",
    visible: false,
    type: "Foundation",
    style: { color: "orange", fontSize: 64 }
  },
  {
    name: "logo-javascript",
    visible: false,
    type: "Ionicons",
    style: { color: "yellow", fontSize: 56 }
  },
  {
    name: "android1",
    visible: false,
    type: "AntDesign",
    style: { color: "green", fontSize: 56 }
  },
  {
    name: "react",
    visible: false,
    type: "FontAwesome5",
    style: { color: "blue", fontSize: 56 }
  },
  {
    name: "visual-studio",
    visible: false,
    type: "MaterialCommunityIcons",
    style: { color: "blue", fontSize: 56 }
  },
  {
    name: "css3",
    visible: false,
    type: "Foundation",
    style: { color: "blue", fontSize: 64 }
  },
  {
    name: "html5",
    visible: false,
    type: "Foundation",
    style: { color: "orange", fontSize: 64 }
  },
  {
    name: "logo-javascript",
    visible: false,
    type: "Ionicons",
    style: { color: "yellow", fontSize: 56 }
  },
  {
    name: "android1",
    visible: false,
    type: "AntDesign",
    style: { color: "green", fontSize: 56 }
  },
  {
    name: "react",
    visible: false,
    type: "FontAwesome5",
    style: { color: "blue", fontSize: 56 }
  },
  {
    name: "visual-studio",
    visible: false,
    type: "MaterialCommunityIcons",
    style: { color: "blue", fontSize: 56 }
  }
];

const shuffleCards = data => {
  const array = [...data];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const ListCard = () => {
  const [data, setData] = useState({
    tmp: "",
    records: shuffleCards([...defaultCards]),
    actions: 0
  });

  const handlePress = (name, index) => {
    const { tmp, records } = data;
    if (records[index].visible) {
      return;
    }

    if (tmp.length > 0 && tmp === name) {
      const updated = records.map(item => {
        if (item.name === name) {
          item.visible = true;
        }
        return item;
      });
      setData({ ...data, tmp: "", records: [...updated] });
    } else if (tmp.length === 0) {
      const updated = [...records];
      updated[index].visible = true;
      setData({ ...data, tmp: name, records: [...updated] });
    } else {
      const updated = records.map(item => {
        if (item.name === name || item.name === tmp) {
          item.visible = false;
        }
        return item;
      });
      setData({ ...data, tmp: "", records: [...updated] });
    }
  };

  return (
    <Container>
      <Wrapper>
        {data.records.map((card, index) => (
          <Card key={index} index={index} onPress={handlePress} {...card} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default ListCard;
