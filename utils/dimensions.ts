import { Dimensions } from "react-native";

const windowDimensions = Dimensions.get("window");

export const WINDOW_HEIGHT = windowDimensions.height;

const SCALE_FACTOR: number = 1.2;

export const scaleSize = (size: number): number => size * SCALE_FACTOR;
