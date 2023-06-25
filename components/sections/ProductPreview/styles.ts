import { StyleSheet } from "react-native";

import { COLORS } from "../../../constants";
import { scaleSize } from "../../../utils";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 78,
    marginBottom: scaleSize(24),
    borderRadius: 16,
    backgroundColor: COLORS.neutral_20,
  },
  image: {
    width: "100%",
    height: scaleSize(78),
  },
});

export default styles;
