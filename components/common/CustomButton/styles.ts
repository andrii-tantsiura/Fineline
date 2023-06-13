import { StyleSheet } from "react-native";
import { scaleSize } from "../../../utils/dimensions";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: scaleSize(8),
  },
  icon: {
    height: scaleSize(20),
    width: scaleSize(20),
  },
  pressed: {
    opacity: 0.75,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default styles;
