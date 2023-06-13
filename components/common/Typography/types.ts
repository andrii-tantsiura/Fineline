import { TextStyle } from "react-native";

import { IColors } from "../../../constants/colors";

export interface IFontWeights {
  semiBold: string;
  medium: string;
  regular: string;
}

export interface IFontSizes {
  i12: number;
  i14: number;
  i16: number;
  i18: number;
}

export interface IFontHeights {
  i18: number;
  i21: number;
  i22: number;
  i27: number;
  i28: number;
}

export interface ITypographyStyle
  extends Omit<TextStyle, "fontWeight" | "fontSize" | "color" | "lineHeight"> {
  fontWeight?: keyof IFontWeights;
  fontSize?: keyof IFontSizes;
  color?: keyof IColors;
  lineHeight?: keyof IFontHeights;
}
