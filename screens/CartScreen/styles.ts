import { StyleSheet } from "react-native";

import { customButtonStyles, typographyStyle_i12 } from "../../constants";
import { scaleSize } from "../../utils";

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  cartList: {
    marginTop: scaleSize(16),
    marginHorizontal: scaleSize(16),
  },
  subtotal: {
    marginTop: scaleSize(16),
    marginHorizontal: scaleSize(16),
    ...typographyStyle_i12,
  },
  button: {
    marginHorizontal: scaleSize(16),
    marginTop: scaleSize(12),
    marginBottom: scaleSize(16),
    ...customButtonStyles.i1,
  },
});

export default styles;
