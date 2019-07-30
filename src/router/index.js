import { createStackNavigator, createAppContainer } from "react-navigation";
import { Home, Game } from "../screens";

export const HOME = "HOME";
export const GAME = "GAME";

const AppNavigator = createStackNavigator(
  {
    [HOME]: Home,
    [GAME]: Game
  },
  {
    initialRouteName: HOME
  }
);

export default createAppContainer(AppNavigator);
