import { StyleSheet } from "react-native";

import { COLORS } from "../../../../../constants";

const styles = StyleSheet.create({
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: COLORS.neutral_10,
  },
  action: {
    padding: 8,
  },
});

export default styles;
