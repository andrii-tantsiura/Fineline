import { StyleSheet } from "react-native";

import COLORS from "../../../constants/colors";
import { textInputStyles } from "../../../constants/globalStyles";
import {
  typographyStyle_i13,
  typographyStyle_i2,
} from "../../../constants/typography";
import { scaleSize } from "../../../utils/dimensions";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleLabel: {
    marginBottom: scaleSize(4),
    ...typographyStyle_i13,
  },
  inputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLORS.neutral_40,
  },
  errorInputContainer: {
    borderColor: COLORS.error,
  },
  input: {
    flex: 1,
    paddingLeft: scaleSize(12),
    paddingTop: 14,
    paddingBottom: 10,
    ...textInputStyles.i1,
  },
  clearButton: {
    marginTop: 14,
    marginRight: scaleSize(7),
  },
  errorLabel: {
    marginTop: scaleSize(6),
    ...typographyStyle_i2,
  },
});

export default styles;
