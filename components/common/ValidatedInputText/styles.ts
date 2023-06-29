import { StyleSheet } from "react-native";

import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    columnGap: 10,
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginVertical: 6,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLORS.neutral_40,
  },
  input: {
    flex: 1,
    paddingTop: 14,
    paddingBottom: 10,
  },
  clearButton: {
    marginTop: 15,
    marginRight: 14,
  },
  highlightedInputContainer: {
    borderColor: COLORS.error,
  },
});

export default styles;
