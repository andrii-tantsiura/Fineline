import { Dimensions } from "react-native";

export const { width: screenWidth, height: screenHeight } =
  Dimensions.get("window");

const SCALE_FACTOR: number = 1.2;

export const scaleSize = (size: number): number => size * SCALE_FACTOR;
