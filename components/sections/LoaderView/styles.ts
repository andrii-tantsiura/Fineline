import { StyleSheet } from "react-native";

import COLORS from "../../../constants/colors";
import { FontSizes } from "../../../constants/typography";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.neutral_0,
    opacity: 0.8,
    padding: 32,
  },
  message: {
    ...FontSizes.i14,
    color: COLORS.primary,
    marginBottom: 12,
  },
});

export default styles;
