import React from "react";
import { Container, Content } from "native-base";
import { ListCard, PlayerModal, SuccessModal } from "../../components";
import { HOME } from '../../router'
class Game extends React.Component {
  state = {
    player: "",
    actions: 0,
    successModal: false
  };

  toggleSuccessModal = () => {
    const { successModal } = this.state;
    this.setState({ successModal: !successModal });
  };

  gameFinished = () => {
    const { navigation } = this.props;
    this.toggleSuccessModal();
    navigation.navigate(HOME);
  };

  render() {
    const { player, successModal } = this.state;
    return (
      <Container>
        <Content>
          <PlayerModal
            onSet={player => {
              this.setState({ player });
            }}
          />
          <ListCard player={player} onFinished={this.toggleSuccessModal} />
          <SuccessModal visible={successModal} player={player} onClose={this.gameFinished}/>
        </Content>
      </Container>
    );
  }
}

Game.navigationOptions = {
  title: "Game"
};

export default Game;
