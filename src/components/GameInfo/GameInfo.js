import React from "react";
import { Text } from "native-base";
import { Wrapper, Info, Item } from "./style";

const GameInfo = props => {
  return (
    <Wrapper>
      <Item>
        <Text>Jogador</Text>
        <Info>{props.player}</Info>
      </Item>
      <Item>
        <Text>Jogadas</Text>
        <Info>{props.actions}</Info>
      </Item>
    </Wrapper>
  );
};

export default GameInfo;
