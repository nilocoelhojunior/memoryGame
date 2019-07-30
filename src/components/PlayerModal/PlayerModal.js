import React, { Component } from "react";
import { KeyboardAvoidingView, Modal } from "react-native";
import { Button, H1, Text } from "native-base";
import { Wrapper, Content, Input } from "./style";

export default class PlayerModal extends Component {
  state = {
    visible: true,
    player: ""
  };

  setModalVisible = visible => {
    this.setState({ visible });
  };

  handelInput = text => {
    this.setState({ player: text });
  };

  onSet = () => {
    this.setModalVisible(false);
    this.props.onSet(this.state.player);
  };

  render() {
    const { visible } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" enabled>
        <Modal animationType="slide" transparent={true} visible={visible}>
          <Wrapper>
            <Content>
              <H1>Insira o nome do jogador</H1>
              <Input onChangeText={this.handelInput} required />
              <Button block onPress={this.onSet}>
                <Text>Começar!</Text>
              </Button>
            </Content>
          </Wrapper>
        </Modal>
      </KeyboardAvoidingView>
    );
  }
}
