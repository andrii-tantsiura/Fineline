import React from "react";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";

import COLORS from "../../../constants/colors";
import {
  FontHeights,
  FontSizes,
  FontWeights,
} from "../../../constants/typography";
import { ITypographyStyle } from "./types";

const createCustomStyle = (style: StyleProp<ITypographyStyle>): TextStyle => {
  let customStyle: TextStyle = {};

  if (style) {
    let unionStyles: ITypographyStyle = {};

    if (Array.isArray(style)) {
      unionStyles = Object.assign({}, ...style);
    } else if (typeof style === "object") {
      unionStyles = style;
    }

    const { lineHeight, fontWeight, fontSize, color, ...restStyleAttributes } =
      unionStyles;

    const specificStyle: TextStyle = {
      lineHeight: lineHeight && FontHeights[lineHeight],
      fontFamily: fontWeight && FontWeights[fontWeight],
      fontSize: fontSize && FontSizes[fontSize],
      color: color && COLORS[color],
    };

    customStyle = Object.assign(restStyleAttributes, specificStyle);
  }

  return customStyle;
};

export interface ITypographyProps extends Omit<TextProps, "style"> {
  textAlign?: TextStyle["textAlign"];
  style?: StyleProp<ITypographyStyle>;
}

export const Typography: React.FC<ITypographyProps> = ({
  textAlign,
  style,
  children,
  ...props
}) => {
  const textStyles = [createCustomStyle(style), { textAlign }];

  return (
    <Text {...props} style={textStyles}>
      {children}
    </Text>
  );
};
