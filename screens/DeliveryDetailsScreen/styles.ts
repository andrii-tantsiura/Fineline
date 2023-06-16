import { StyleSheet } from "react-native";

import {
  customButtonStyles,
  iconButtonStyles,
} from "../../constants/globalStyles";
import { scaleSize } from "../../utils/dimensions";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backButton: {
    marginLeft: scaleSize(16),
    ...iconButtonStyles.i1,
  },
  formContainer: {
    marginTop: scaleSize(16),
    marginHorizontal: scaleSize(16),
  },
  namesContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  nameContainer: {
    width: "49%",
  },
  inputContainer: {
    marginBottom: scaleSize(18),
  },
  commentTextInput: {
    height: scaleSize(129),
    textAlignVertical: "top",
  },
  button: {
    marginHorizontal: scaleSize(16),
    marginVertical: scaleSize(16),
    ...customButtonStyles.i1,
  },
});

export default styles;
