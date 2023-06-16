import {
  IFontHeights,
  IFontSizes,
  IFontWeights,
  ITypographyStyle,
} from "../components/common/Typography/types";
import { scaleSize } from "../utils";

export const FontWeightAliases = {
  SemiBold: "Poppins-SemiBold",
  Medium: "Poppins-Medium",
  Regular: "Poppins-Regular",
};

export const FontWeights: IFontWeights = {
  semiBold: FontWeightAliases.SemiBold,
  medium: FontWeightAliases.Medium,
  regular: FontWeightAliases.Regular,
};

export const FontSizes: IFontSizes = {
  i18: scaleSize(18),
  i16: scaleSize(16),
  i14: scaleSize(14),
  i12: scaleSize(12),
};

export const FontHeights: IFontHeights = {
  i28: scaleSize(28),
  i27: scaleSize(27),
  i22: scaleSize(22),
  i21: scaleSize(21),
  i18: scaleSize(18),
};

// WEIGHT 600 - semiBold
// SIZE 12
const typographyStyle_i1: ITypographyStyle = {
  fontWeight: "semiBold",
  fontSize: "i12",
  color: "primary",
  lineHeight: "i18",
};

const typographyStyle_i2: ITypographyStyle = {
  fontWeight: "semiBold",
  fontSize: "i12",
  color: "error",
  lineHeight: "i18",
};

// SIZE 14
const typographyStyle_i3: ITypographyStyle = {
  fontWeight: "semiBold",
  fontSize: "i14",
  color: "neutral_0",
  lineHeight: "i22",
};

// SIZE 16
const typographyStyle_i4: ITypographyStyle = {
  fontWeight: "semiBold",
  fontSize: "i16",
  color: "neutral_90",
  lineHeight: "i28",
};

// SIZE 18
const typographyStyle_i5: ITypographyStyle = {
  fontWeight: "semiBold",
  fontSize: "i18",
  color: "neutral_80",
  lineHeight: "i28",
};

const typographyStyle_i6: ITypographyStyle = {
  fontWeight: "semiBold",
  fontSize: "i18",
  color: "neutral_100",
  lineHeight: "i28",
};

// WEIGHT 500 - medium
// SIZE 14
const typographyStyle_i7: ITypographyStyle = {
  fontWeight: "medium",
  fontSize: "i14",
  color: "primary",
  lineHeight: "i22",
};

const typographyStyle_i8: ITypographyStyle = {
  fontWeight: "medium",
  fontSize: "i14",
  color: "neutral_70",
  lineHeight: "i22",
};

const typographyStyle_i9: ITypographyStyle = {
  fontWeight: "medium",
  fontSize: "i14",
  color: "neutral_90",
  lineHeight: "i22",
};

const typographyStyle_i10: ITypographyStyle = {
  fontWeight: "medium",
  fontSize: "i14",
  color: "neutral_100",
  lineHeight: "i22",
};

// SIZE 16
const typographyStyle_i11: ITypographyStyle = {
  fontWeight: "medium",
  fontSize: "i16",
  color: "neutral_80",
};

const typographyStyle_i12: ITypographyStyle = {
  fontWeight: "medium",
  fontSize: "i16",
  color: "neutral_100",
  lineHeight: "i28",
};

// WEIGHT 400 - regular
// SIZE 12
const typographyStyle_i13: ITypographyStyle = {
  fontWeight: "regular",
  fontSize: "i12",
  color: "neutral_60",
  lineHeight: "i18",
};

const typographyStyle_i22: ITypographyStyle = {
  fontWeight: "regular",
  fontSize: "i12",
  color: "neutral_40",
  lineHeight: "i18",
};

// SIZE 14
const typographyStyle_i14: ITypographyStyle = {
  fontWeight: "regular",
  fontSize: "i14",
  color: "neutral_50",
  lineHeight: "i21",
};

const typographyStyle_i15: ITypographyStyle = {
  fontWeight: "regular",
  fontSize: "i14",
  color: "neutral_60",
  lineHeight: "i18",
};

const typographyStyle_i16: ITypographyStyle = {
  fontWeight: "regular",
  fontSize: "i14",
  color: "neutral_60",
  lineHeight: "i21",
};

const typographyStyle_i17: ITypographyStyle = {
  fontWeight: "regular",
  fontSize: "i14",
  color: "neutral_70",
  lineHeight: "i21",
};

const typographyStyle_i18: ITypographyStyle = {
  fontWeight: "regular",
  fontSize: "i14",
  color: "neutral_80",
  lineHeight: "i21",
};

const typographyStyle_i19: ITypographyStyle = {
  fontWeight: "regular",
  fontSize: "i14",
  color: "neutral_100",
  lineHeight: "i21",
};

// SIZE 18
const typographyStyle_i20: ITypographyStyle = {
  fontWeight: "regular",
  fontSize: "i18",
  color: "neutral_80",
  lineHeight: "i27",
};

export {
  typographyStyle_i1,
  typographyStyle_i10,
  typographyStyle_i11,
  typographyStyle_i12,
  typographyStyle_i13,
  typographyStyle_i14,
  typographyStyle_i15,
  typographyStyle_i16,
  typographyStyle_i17,
  typographyStyle_i18,
  typographyStyle_i19,
  typographyStyle_i20,
  typographyStyle_i2,
  typographyStyle_i3,
  typographyStyle_i4,
  typographyStyle_i5,
  typographyStyle_i6,
  typographyStyle_i7,
  typographyStyle_i8,
  typographyStyle_i9,
  typographyStyle_i22,
};
