import React from "react";
import { Container, Content, H1, List, ListItem, Text } from "native-base";
import storage from "../../storage/storage";
import { HOME } from "../../router";

class Ranking extends React.Component {
  state = {
    players: []
  };

  componentDidMount = async () => {
    const data = await storage.getAll();
    const players = data.map(item => {
      return JSON.parse(item[1]);
    });
    const ordered = players.sort((a, b) => (a.actions > b.actions ? 1 : -1));
    this.setState({ players: ordered });
  };

  renderPlayer = (player, index) => {
    console.log("renderPlayer", player, index);
    return (
      <ListItem>
        <Text>
          #{index + 1}-{player.player} {player.actions} jogadas
        </Text>
      </ListItem>
    );
  };

  render() {
    const { players } = this.state;
    console.log(players);
    return (
      <Container>
        <Content>
          <List>
            {players.map((item, index) => this.renderPlayer(item, index))}
          </List>
        </Content>
      </Container>
    );
  }
}

Ranking.navigationOptions = {
  title: "Ranking"
};

export default Ranking;
