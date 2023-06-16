import { StyleSheet } from "react-native";

import { COLORS } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 45,
    width: 119,
    paddingVertical: 8,
    backgroundColor: COLORS.neutral_10,
    borderRadius: 8,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedContainer: {
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  image: {
    height: 20,
    width: 20,
    marginRight: 8,
  },
});

export default styles;
