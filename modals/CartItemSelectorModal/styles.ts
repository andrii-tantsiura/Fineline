import { StyleSheet } from "react-native";

import {
  COLORS,
  customButtonStyles,
  typographyStyle_i5,
} from "../../constants";
import { scaleSize } from "../../utils";

const styles = StyleSheet.create({
  modalContainer: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: scaleSize(16),
  },
  draggableIcon: {
    marginVertical: 16,
    height: scaleSize(6),
    width: scaleSize(65),
    borderRadius: 24,
    backgroundColor: COLORS.neutral_30,
  },
  quantitySelectionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 80,
  },
  subtotalText: {
    ...typographyStyle_i5,
    marginTop: 4,
  },
  addProductToCartButton: {
    marginVertical: scaleSize(16),
    ...customButtonStyles.i1,
  },
});

export default styles;
