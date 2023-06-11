import React from "react";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";

import COLORS from "../../../constants/colors";
import {
  FontHeights,
  FontSizes,
  FontWeights,
} from "../../../constants/typography";
import { TypographyStyle } from "./types";

export interface ITypographyProps extends Omit<TextProps, "style"> {
  textAlign?: TextStyle["textAlign"];
  style?: StyleProp<TypographyStyle>;
}

export const Typography: React.FC<ITypographyProps> = ({
  textAlign: textAlignProp,
  style,
  children,
  ...props
}) => {
  let textStyles: TextStyle[] = [];

  if (style) {
    let unionStyles: TypographyStyle = {};

    if (Array.isArray(style)) {
      unionStyles = Object.assign({}, ...style);
    } else if (typeof style === "object") {
      unionStyles = style;
    }

    const { textAlign, lineHeight, fontWeight, fontSize, color, ...rest } =
      unionStyles;

    const customStyle: TextStyle = {
      textAlign: textAlignProp ?? textAlign,
      lineHeight: lineHeight && FontHeights[lineHeight],
      fontFamily: fontWeight && FontWeights[fontWeight],
      fontSize: fontSize && FontSizes[fontSize],
      color: color && COLORS[color],
    };

    textStyles = [rest, customStyle];
  }

  return (
    <Text {...props} style={textStyles}>
      {children}
    </Text>
  );
};
