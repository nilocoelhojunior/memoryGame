import { Dimensions } from "react-native";

export const getWindowWidth = () => Dimensions.get("window").width;

export const getWindowHeight = () => Dimensions.get("window").height;

export const WINDOW_WIDTH = getWindowWidth();

export const WINDOW_HEIGHT = getWindowHeight();
