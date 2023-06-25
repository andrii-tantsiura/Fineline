import { StyleSheet } from "react-native";

import { COLORS, typographyStyle_i20 } from "../../../constants";
import { scaleSize } from "../../../utils";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: scaleSize(6),
    paddingHorizontal: scaleSize(12),
    height: scaleSize(48),
    borderRadius: 8,
    backgroundColor: COLORS.neutral_10,
  },
  valueContainer: {
    width: scaleSize(32),
    alignItems: "center",
  },
  value: {
    ...typographyStyle_i20,
    marginTop: 4,
  },
});

export default styles;
