import { StyleSheet } from "react-native";

import { scaleSize } from "../../../utils";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: scaleSize(8),
  },
  pressed: {
    opacity: 0.75,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default styles;
