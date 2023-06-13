import { StyleSheet } from "react-native";

import COLORS from "../../constants/colors";
import { scaleSize } from "../../utils/dimensions";

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: COLORS.neutral_0,
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
    height: scaleSize(48),
    backgroundColor: COLORS.primary,
    borderRadius: 8,
  },
});

export default styles;
