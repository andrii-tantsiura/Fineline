import { scaleSize } from "../utils/dimensions";

interface FontFamily {
  fontFamily: string;
}

export interface IFontWeights {
  semiBold: FontFamily;
  medium: FontFamily;
  regular: FontFamily;
}

export interface IFontSizes {
  i18: number;
  i16: number;
  i14: number;
  i12: number;
}

export const FontWeightAliases = {
  SemiBold: "Poppins-SemiBold",
  Medium: "Poppins-Medium",
  Regular: "Poppins-Regular",
};

export const FontWeights: IFontWeights = {
  semiBold: {
    fontFamily: FontWeightAliases.SemiBold,
  },
  medium: {
    fontFamily: FontWeightAliases.Medium,
  },
  regular: {
    fontFamily: FontWeightAliases.Regular,
  },
};

export const FontSizes = {
  i18: {
    fontSize: scaleSize(18),
  },
  i16: {
    fontSize: scaleSize(16),
  },
  i14: {
    fontSize: scaleSize(14),
  },
  i12: {
    fontSize: scaleSize(12),
  },
};
