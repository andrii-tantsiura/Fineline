import { StyleSheet } from "react-native";

import { COLORS } from "../../../constants";
import { scaleSize } from "../../../utils";

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    columnGap: 10,
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginVertical: 6,
    paddingTop: 14,
    paddingBottom: 10,
    paddingLeft: scaleSize(12),
    paddingRight: scaleSize(14),
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLORS.neutral_40,
  },
  input: {
    flex: 1,
  },
  highlightedInputContainer: {
    borderColor: COLORS.error,
  },
});

export default styles;
