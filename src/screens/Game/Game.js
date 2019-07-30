import React from "react";
import { Container, Content } from "native-base";
import { ListCard, PlayerModal } from "../../components";

class Game extends React.Component {
  state = {
    player: ""
  };

  render() {
    console.log(this.state);
    return (
      <Container>
        <Content>
          <PlayerModal
            onSet={player => {
              this.setState({ player });
            }}
          />
          <ListCard player={this.state.player} />
        </Content>
      </Container>
    );
  }
}

Game.navigationOptions = {
  title: "Game"
};

export default Game;
