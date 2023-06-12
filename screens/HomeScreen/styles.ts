import { StyleSheet } from "react-native";

import COLORS from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 13,
    backgroundColor: COLORS.neutral_0,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    columnGap: 13,
  },
  inputSearchNameProduct: {
    borderColor: "silver",
    borderWidth: 1,
    flex: 2,
  },
  sortSelector: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 5,
    flex: 1,
  },
});

export default styles;
