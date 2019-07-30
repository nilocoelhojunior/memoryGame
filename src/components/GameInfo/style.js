import styled from "styled-components";
import { H2 } from "native-base";

export const Wrapper = styled.View`
  width: 100%;
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Item = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
`;

export const Info = styled(H2)`
  color: #2980b9;
  margin-left: 10px;
`;
