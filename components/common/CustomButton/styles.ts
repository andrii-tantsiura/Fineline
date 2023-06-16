import { StyleSheet } from "react-native";

import { scaleSize } from "../../../utils/dimensions";
import { imageStyles } from "../../../constants/globalStyles";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: scaleSize(8),
  },
  icon: {
    ...imageStyles.i1,
  },
  pressed: {
    opacity: 0.75,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default styles;
