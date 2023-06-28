import { StyleSheet } from "react-native";

import { customButtonStyles, iconButtonStyles } from "../../constants";
import { scaleSize } from "../../utils";

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backButton: {
    marginLeft: scaleSize(16),
    ...iconButtonStyles.i1,
  },
  formContainer: {
    rowGap: scaleSize(18),
    marginTop: scaleSize(16),
    marginHorizontal: scaleSize(16),
  },
  expiryDateAndCvcContainer: {
    columnGap: 10,
    flexDirection: "row",
  },
  button: {
    margin: scaleSize(16),
    ...customButtonStyles.i1,
  },
});

export default styles;