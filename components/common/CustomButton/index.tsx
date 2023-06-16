import React from "react";
import {
  Image,
  ImageProps,
  Pressable,
  PressableStateCallbackType,
  StyleProp,
  ViewProps,
} from "react-native";

import { imageStyles, typographyStyle_i3 } from "../../../constants";
import { Typography } from "../Typography";
import { ITypographyStyle } from "../Typography/types";
import styles from "./styles";

interface ICustomButtonProps {
  children: ViewProps["children"];
  imageSource?: ImageProps["source"];
  disabled?: boolean;
  style?: ViewProps["style"];
  textStyle?: StyleProp<ITypographyStyle>;
  onPress: () => void;
}

export const CustomButton: React.FC<ICustomButtonProps> = ({
  children,
  imageSource,
  disabled,
  style,
  textStyle = typographyStyle_i3,
  onPress,
}) => {
  const getStyle = ({ pressed }: PressableStateCallbackType) => [
    style,
    styles.container,
    disabled ? styles.disabled : pressed && styles.pressed,
  ];

  return (
    <Pressable style={getStyle} disabled={disabled} onPress={onPress}>
      <Typography style={textStyle}>{children}</Typography>
      {imageSource && <Image style={imageStyles.i1} source={imageSource} />}
    </Pressable>
  );
};
