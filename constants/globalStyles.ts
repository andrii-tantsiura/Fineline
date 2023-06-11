import { StyleSheet } from "react-native";
import COLORS from "./colors";

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

export { iconButtonStyles, containerStyles };
