import { StyleSheet } from "react-native";

import { customButtonStyles, iconButtonStyles } from "../../constants";
import { scaleSize } from "../../utils";

const styles = StyleSheet.create({
  backButton: {
    marginLeft: scaleSize(16),
    ...iconButtonStyles.i1,
  },
  formContainer: {
    rowGap: scaleSize(18),
    marginTop: scaleSize(16),
    marginHorizontal: scaleSize(16),
  },
  nameInputsContainer: {
    columnGap: scaleSize(8),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameInputContainer: {
    flex: 1,
  },
  commentTextInput: {
    height: scaleSize(129),
    marginBottom: scaleSize(40),
  },
  goToPayButton: {
    margin: scaleSize(16),
    ...customButtonStyles.i1,
  },
});

export default styles;
