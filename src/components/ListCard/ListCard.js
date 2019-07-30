import React from "react";
import { Container } from "native-base";
import { Card, GameInfo } from "../";
import { Wrapper } from "./style";
import storage from "../../storage/storage";

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

class ListCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tmp: "",
      records: shuffleCards([...defaultCards]),
      actions: 0,
      block: false
    };
  }

  handleGame = (name, index) => {
    const { tmp, records } = this.state;

    if (tmp.length > 0 && tmp === name) {
      const updated = records.map(item => {
        if (item.name === name) {
          item.visible = true;
        }
        return item;
      });
      this.setState({ tmp: "", block: false, records: [...updated] });
    } else if (tmp.length === 0) {
      const updated = [...records];
      updated[index].visible = true;
      this.setState({ tmp: name, block: false, records: [...updated] });
    } else {
      const updated = records.map(item => {
        if (item.name === name || item.name === tmp) {
          item.visible = false;
        }
        return item;
      });
      this.setState({ tmp: "", block: false, records: [...updated] });
    }
  };

  handlePress = (name, index) => {
    const { actions, tmp, records } = this.state;

    if (records[index].visible) {
      return;
    }

    const updated = [...records];
    updated[index].visible = true;
    this.setState(
      { records: [...updated], block: true, actions: actions + 1 },
      () => {
        setTimeout(() => this.handleGame(name, index), 350);
      }
    );
  };

  componentDidUpdate = async () => {
    const { actions, records } = this.state;
    const { player } = this.props;
    const finished = records.every(item => item.visible === true);
    if (finished) {
      await storage.set(player, actions);
      const data = await storage.getAll();
      console.log(data);
    }
  };

  render() {
    const { actions, block, records } = this.state;
    const { player } = this.props;
    return (
      <Container>
        <Wrapper>
          <GameInfo actions={actions} player={player} />
          {records.map((card, index) => (
            <Card
              block={block}
              key={index}
              index={index}
              onPress={this.handlePress}
              {...card}
            />
          ))}
        </Wrapper>
      </Container>
    );
  }
}

export default ListCard;
