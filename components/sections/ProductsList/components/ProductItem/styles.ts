import { StyleSheet } from "react-native";

import { COLORS } from "../../../../../constants";

const styles = StyleSheet.create({
  wrapperContainer: {
    flexDirection: "row",
    borderColor: COLORS.neutral_30,
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    height: 104,
    marginBottom: 12,
  },
  productPreview: {
    width: 72,
    marginRight: 16,
    paddingHorizontal: 10,
    borderRadius: 16,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  info: {
    flex: 1,
    justifyContent: "space-between",
    height: "100%",
  },
  shoppingCart: {
    borderRadius: 8,
    padding: 8,
    backgroundColor: COLORS.primary,
  },
});

export default styles;
