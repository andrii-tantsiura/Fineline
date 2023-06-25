import { StyleSheet } from "react-native";

import { COLORS, typographyStyle_i10 } from "../../../constants";
import { scaleSize } from "../../../utils";

const styles = StyleSheet.create({
  productPreview: {
    paddingHorizontal: 100,
    height: scaleSize(240),
    marginBottom: scaleSize(24),
  },
  descriptionContainer: {
    alignItems: "flex-start",
  },
  categoryContainer: {
    paddingVertical: scaleSize(4),
    paddingHorizontal: scaleSize(16),
    marginBottom: scaleSize(8),
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 8,
  },
  containsTitle: {
    marginTop: scaleSize(16),
    marginBottom: scaleSize(4),
    ...typographyStyle_i10,
  },
  rating: {
    marginTop: 4,
  },
});

export default styles;
