import { StyleSheet } from "react-native";

import { scaleSize } from "../utils/";
import { COLORS } from "./colors";

const customButtonStyles = StyleSheet.create({
  i1: {
    height: scaleSize(48),
    backgroundColor: COLORS.primary,
    borderRadius: 8,
  },
  i2: {
    height: scaleSize(40),
    backgroundColor: COLORS.primary,
    borderRadius: 8,
  },
  i3: {
    height: scaleSize(40),
    backgroundColor: COLORS.neutral_70,
    borderRadius: 8,
  },
});

const imageStyles = StyleSheet.create({
  i1: {
    height: scaleSize(20),
    width: scaleSize(20),
  },
  i2: {
    height: scaleSize(24),
    width: scaleSize(24),
  },
});

const iconButtonStyles = StyleSheet.create({
  i1: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: COLORS.neutral_10,
  },
});

const containerStyles = StyleSheet.create({
  i1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.neutral_0,
  },
  i2: {
    flex: 1,
    backgroundColor: COLORS.neutral_0,
  },
});

const separatorStyles = StyleSheet.create({
  i1: {
    height: 1,
    backgroundColor: COLORS.neutral_40,
  },
});

const shadowStyles = StyleSheet.create({
  i1: {
    elevation: 5,
    shadowColor: COLORS.neutral_100,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});

export {
  containerStyles,
  customButtonStyles,
  iconButtonStyles,
  imageStyles,
  separatorStyles,
  shadowStyles,
};
