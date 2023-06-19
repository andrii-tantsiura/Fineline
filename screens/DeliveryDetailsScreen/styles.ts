import { StyleSheet } from "react-native";

import {
  customButtonStyles,
  iconButtonStyles,
} from "../../constants/globalStyles";
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
  nameInputsContainer: {
    columnGap: 10,
    flexDirection: "row",
  },
  commentTextInput: {
    height: scaleSize(129),
    textAlignVertical: "top",
  },
  button: {
    margin: scaleSize(16),
    ...customButtonStyles.i1,
  },
});

export default styles;
