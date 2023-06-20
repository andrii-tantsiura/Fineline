import { StyleSheet } from "react-native";

import { COLORS, containerStyles, shadowStyles } from "../../../constants";

const styles = StyleSheet.create({
  rootContainer: {
    ...containerStyles.i1,
    backgroundColor: COLORS.neutral_0_60_opacity,
  },
  dialogContainer: {
    margin: 32,
    paddingVertical: 16,
    paddingHorizontal: 24,
    rowGap: 8,
    backgroundColor: COLORS.neutral_10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLORS.neutral_40,
    ...shadowStyles.i1,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    columnGap: 24,
    marginTop: 16,
  },
  cancelButton: {
    width: "50%",
  },
  confirmButton: {
    width: "50%",
  },
});

export default styles;
