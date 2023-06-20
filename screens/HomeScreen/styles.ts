import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    columnGap: 13,
    paddingTop: 16,
    paddingHorizontal: 18,
  },
  inputSearchQuery: {
    flex: 1,
    borderColor: COLORS.neutral_40,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 15,
  },
  sortSelector: {
    borderColor: COLORS.neutral_40,
    borderRadius: 8,
    borderWidth: 1,
    width: 124,
    padding: 8,
  },
});

export default styles;
