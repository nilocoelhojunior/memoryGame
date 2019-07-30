import styled from "styled-components";
import { WINDOW_HEIGHT } from "../../utils/dimensions";

export const Wrapper = styled.View`
  height: ${WINDOW_HEIGHT}px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.27);
`;

export const Content = styled.View`
  padding: 16px;
  background-color: white;
  min-height: 100px;
  border-radius: 5px;
`;

export const Input = styled.TextInput`
  border-bottom-color: black;
  border-bottom-width: 1px;
  margin-vertical: 16px;
`;
