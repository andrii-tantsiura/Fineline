import { StyleSheet } from "react-native";

import COLORS from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.neutral_0,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    columnGap: 13,
    paddingTop: 18,
    paddingHorizontal: 18,
  },
  inputSearchNameProduct: {
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
    width: 120,
    padding: 8,
  },
  categoriesList: {
    maxHeight: 45,
    marginTop: 24,
    marginLeft: 18,
  },
  productsList: {
    flex: 1,
    margin: 18,
  },
});

export default styles;
