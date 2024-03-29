import { StyleSheet } from "react-native";

import { customButtonStyles } from "../../constants";
import { scaleSize } from "../../utils";

const styles = StyleSheet.create({
  formContainer: {
    rowGap: scaleSize(18),
    marginTop: scaleSize(16),
    marginBottom: scaleSize(54),
    marginHorizontal: scaleSize(16),
  },
  inputsRowContainer: {
    columnGap: scaleSize(8),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  expiryDateInputContainer: {
    flex: 1,
  },
  cvcInputContainer: {
    flex: 1,
  },
  totalContainer: {
    rowGap: scaleSize(8),
    marginVertical: scaleSize(16),
    marginHorizontal: scaleSize(16),
  },
  totalRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  confirmAndPayButton: {
    marginTop: 4,
    ...customButtonStyles.i1,
  },
});

export default styles;
