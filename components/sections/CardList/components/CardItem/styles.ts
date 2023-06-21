import { StyleSheet } from "react-native";

import { COLORS } from "../../../../../constants";

const styles = StyleSheet.create({
  wrapperContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLORS.neutral_30,
    padding: 16,
    height: 122,
    marginBottom: 12,
  },
  imageProduct: {
    width: 90,
    height: 90,
    resizeMode: "contain",
    marginRight: 16,
    borderRadius: 8,
    backgroundColor: COLORS.neutral_20,
  },
  info: {
    flex: 1,
    justifyContent: "space-between",
  },
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
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
