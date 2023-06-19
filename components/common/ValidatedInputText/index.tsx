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
  textInputStyles,
  typographyStyle_i13,
  typographyStyle_i2,
  typographyStyle_i22,
} from "../../../constants";
import { IconButton } from "../IconButton";
import { Typography } from "../Typography";
import styles from "./styles";

type MaskConfig =
  | "none"
  | { maskType: TextInputMaskTypeProp; maskValue?: string };

interface IValidatedInputTextProps extends TextInputProps {
  title?: string;
  maskConfig?: MaskConfig;
  name: string;
  control: Control<any, any>;
  rules: UseControllerProps["rules"];
  trigger: UseFormTrigger<any>;
  resetField: UseFormResetField<any>;
  style?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
}

export const ValidatedInputText: React.FC<IValidatedInputTextProps> = ({
  title = "",
  maskConfig = "none",
  name,
  control,
  rules = {},
  trigger,
  resetField,
  style,
  textInputStyle,
  placeholderTextColor = COLORS.neutral_50,
  onFocus,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const clearHandler = () => {
    resetField(name);
    trigger(name);
  };

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
          ...rest,
          style: [textInputStyles.i1, styles.input, textInputStyle],
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

        const inputContainerStyle = [
          styles.inputContainer,
          (isFocused || Boolean(error)) && styles.highlightedInputContainer,
        ];

        return (
          <View style={[styles.rootContainer, style]}>
            <View style={styles.headerContainer}>
              <Typography textAlign="left" style={typographyStyle_i13}>
                {title}
              </Typography>

              {!rules.required && (
                <Typography textAlign="left" style={typographyStyle_i22}>
                  Optional
                </Typography>
              )}
            </View>

            <View style={inputContainerStyle}>
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

            {error?.message && (
              <Typography style={typographyStyle_i2}>
                {error?.message}
              </Typography>
            )}
          </View>
        );
      }}
    />
  );
};
