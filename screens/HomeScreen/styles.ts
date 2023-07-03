import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    columnGap: 10,
    paddingTop: 16,
    paddingHorizontal: 18,
  },
  inputSearchQuery: {
    flex: 1,
    borderColor: COLORS.neutral_40,
    borderRadius: 8,
    borderWidth: 1,
  },
  sortSelector: {
    borderColor: COLORS.neutral_40,
    borderRadius: 8,
    borderWidth: 1,
    width: 124,
  },
});

export default styles;
