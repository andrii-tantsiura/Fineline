import { StyleSheet } from "react-native";

import COLORS from "../../constants/colors";
import { scaleSize } from "../../utils/dimensions";

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: COLORS.neutral_0,
  },
  formContainer: {
    marginTop: 16,
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
    marginTop: scaleSize(18),
  },
  comment: {
    alignItems: "flex-start",
    height: scaleSize(129),
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginVertical: scaleSize(16),
  },
  button: {
    marginHorizontal: scaleSize(16),
    height: scaleSize(48),
    backgroundColor: COLORS.primary,
    borderRadius: 8,
  },
});

export default styles;
