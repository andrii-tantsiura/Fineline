import { StyleSheet } from "react-native";

import COLORS from "./colors";
import { FontSizes, FontWeightAliases } from "./typography";

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
});

const separatorStyles = StyleSheet.create({
  i1: {
    height: 1,
    backgroundColor: COLORS.neutral_40,
  },
});

const textInputStyles = {
  i1: {
    fontSize: FontSizes.i14,
    fontFamily: FontWeightAliases.Regular,
    color: COLORS.neutral_100,
  },
};

export { containerStyles, iconButtonStyles, separatorStyles, textInputStyles };
