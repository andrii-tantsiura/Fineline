import React, { useState } from "react";
import {
  Control,
  Controller,
  UseControllerProps,
  UseFormResetField,
} from "react-hook-form";
import { UseFormTrigger } from "react-hook-form/dist/types";
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { TextInputMask, TextInputMaskTypeProp } from "react-native-masked-text";

import { IC_CLOSE_DARK } from "../../../assets/icons";
import {
  COLORS,
  iconButtonStyles,
  typographyStyle_i19,
} from "../../../constants";
import { typographyStyleToTextStyle } from "../../../helpers";
import { IconButton } from "../IconButton";
import { ITypographyStyle } from "../Typography/types";
import styles from "./styles";

type MaskConfig =
  | "none"
  | { maskType: TextInputMaskTypeProp; maskValue?: string };

export type IFormController = {
  control: Control<any, any>;
  trigger: UseFormTrigger<any>;
  resetField: UseFormResetField<any>;
};

export interface IValidatedInputTextProps extends TextInputProps {
  name: string;
  maskConfig?: MaskConfig;
  formController: IFormController;
  rules?: UseControllerProps["rules"];
  style?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  typographyStyle?: StyleProp<ITypographyStyle>;
}

export const ValidatedInputText: React.FC<IValidatedInputTextProps> = ({
  name,
  maskConfig = "none",
  formController: { control, trigger, resetField },
  rules = {},
  style,
  textInputStyle,
  typographyStyle = typographyStyle_i19,
  placeholderTextColor = COLORS.neutral_50,
  onFocus,
  ...restProps
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const clearHandler = () => {
    resetField(name);
    trigger(name);
  };

  const textStyles = [
    typographyStyleToTextStyle(typographyStyle),
    styles.input,
    textInputStyle,
  ];

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => {
        const textInputProps: TextInputProps = {
          ...restProps,
          style: textStyles,
          cursorColor: COLORS.primary,
          selectionColor: COLORS.primary,
          placeholderTextColor: placeholderTextColor,
          value: value,
          onChangeText: onChange,
          onFocus: (e) => {
            onFocus?.(e);
            setIsFocused(true);
          },
          onBlur: () => {
            onBlur();
            setIsFocused(false);
          },
        };

        const containerStyle = [
          styles.inputContainer,
          style,
          (isFocused || Boolean(error)) && styles.highlightedInputContainer,
        ];

        return (
          <View style={containerStyle}>
            {maskConfig === "none" ? (
              <TextInput {...textInputProps} />
            ) : (
              <TextInputMask
                {...textInputProps}
                type={maskConfig?.maskType}
                options={{ mask: maskConfig?.maskValue }}
              />
            )}

            {value && (
              <IconButton
                imageStyle={iconButtonStyles.i2}
                source={IC_CLOSE_DARK}
                onPress={clearHandler}
              />
            )}
          </View>
        );
      }}
    />
  );
};
