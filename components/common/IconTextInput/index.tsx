import { FC } from "react";
import { Image, ImageProps, StyleProp, View, ViewProps } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import { IC_CLOSE_DARK } from "../../../assets/icons";
import { imageStyles } from "../../../constants";
import { typographyStyleToTextStyle } from "../../../helpers";
import { IconButton } from "../IconButton";
import { ITypographyStyle } from "../Typography/types";
import styles from "./styles";

interface IIconTextInput {
  value: string;
  placeholder: string;
  imageSource: ImageProps["source"];
  typographyStyle?: StyleProp<ITypographyStyle>;
  style?: ViewProps["style"];
  onValueChanged: (value: string) => void;
}

export const IconTextInput: FC<IIconTextInput> = ({
  value,
  placeholder,
  imageSource,
  style,
  typographyStyle,
  onValueChanged,
}) => {
  const textInputStyle = [
    styles.input,
    typographyStyleToTextStyle(typographyStyle),
  ];

  const clearHandler = () => {
    onValueChanged("");
  };

  return (
    <View style={[styles.container, style]}>
      <Image style={imageStyles.i1} source={imageSource} />

      <TextInput
        style={textInputStyle}
        placeholder={placeholder}
        onChangeText={onValueChanged}
      >
        {value}
      </TextInput>

      {value && (
        <IconButton
          imageStyle={imageStyles.i1}
          source={IC_CLOSE_DARK}
          onPress={clearHandler}
        />
      )}
    </View>
  );
};
