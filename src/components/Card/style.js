import styled from "styled-components";
import { WINDOW_WIDTH } from "../../utils/dimensions";

export const Wrapper = styled.View`
  width: ${WINDOW_WIDTH / 5}px;
  height: ${WINDOW_WIDTH / 5}px;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  margin: 10px;
`;
