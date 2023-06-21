import { StyleSheet } from "react-native";

import { COLORS, customButtonStyles, iconButtonStyles } from "../../constants";
import { scaleSize } from "../../utils";

const styles = StyleSheet.create({
  backButton: {
    marginLeft: scaleSize(16),
    ...iconButtonStyles.i1,
  },
  rootContainer: {
    flex: 1,
  },
  cardList: {
    marginTop: scaleSize(16),
    marginHorizontal: scaleSize(16),
  },
  subtotal: {
    marginTop: scaleSize(16),
    marginHorizontal: scaleSize(16),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    marginHorizontal: scaleSize(16),
    marginTop: scaleSize(12),
    marginBottom: scaleSize(16),
    ...customButtonStyles.i1,
  },
});

export default styles;
