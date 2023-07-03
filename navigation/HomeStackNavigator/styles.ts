import { StyleSheet } from "react-native";

import { COLORS, iconButtonStyles } from "../../constants";
import { scaleSize } from "../../utils";

const styles = StyleSheet.create({
  backButtonContainer: {
    ...iconButtonStyles.i1,
    marginLeft: scaleSize(4),
  },
  cartButtonContainer: {
    backgroundColor: COLORS.neutral_10,
    padding: 8,
    marginRight: 18,
    borderRadius: 8,
  },
});

export default styles;
