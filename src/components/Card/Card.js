import React from "react";
import { TouchableHighlight } from "react-native";
import { Icon } from "native-base";
import { Wrapper } from "./style";

const Card = props => {
  const toggleCard = () => {
    props.onPress(props.name, props.index);
  };
  return (
    <TouchableHighlight onPress={toggleCard} disabled={props.block}>
      <Wrapper>{props.visible && <Icon {...props} />}</Wrapper>
    </TouchableHighlight>
  );
};

export default Card;
