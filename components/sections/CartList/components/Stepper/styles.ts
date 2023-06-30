import { StyleSheet } from "react-native";

import { COLORS } from "../../../../../constants";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: COLORS.neutral_10,
  },
  chaild: {
    padding: 8,
  },
});

export default styles;
