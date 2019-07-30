import { createStackNavigator, createAppContainer } from "react-navigation";
import { Home, Game, Ranking } from "../screens";

export const HOME = "HOME";
export const GAME = "GAME";
export const RANKING = "RANKING";

const AppNavigator = createStackNavigator(
  {
    [HOME]: Home,
    [GAME]: Game,
    [RANKING]: Ranking
  },
  {
    initialRouteName: HOME
  }
);

export default createAppContainer(AppNavigator);
