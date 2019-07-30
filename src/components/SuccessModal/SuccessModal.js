import React, { Component } from "react";
import { KeyboardAvoidingView, Modal } from "react-native";
import { Button, H1, Text } from "native-base";
import { Wrapper, Content } from "./style";

export default class SuccessModal extends Component {
  render() {
    const { player, visible, onClose } = this.props;
    return (
      <KeyboardAvoidingView behavior="padding" enabled>
        <Modal animationType="slide" transparent={true} visible={visible}>
          <Wrapper>
            <Content>
              <H1>Parabéns, {player}!</H1>
              <Button block onPress={onClose}>
                <Text>OK</Text>
              </Button>
            </Content>
          </Wrapper>
        </Modal>
      </KeyboardAvoidingView>
    );
  }
}
