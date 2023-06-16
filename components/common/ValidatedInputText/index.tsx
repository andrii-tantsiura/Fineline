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
import COLORS from "../../../constants/colors";
import { typographyStyle_i22 } from "../../../constants/typography";
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
  rules: UseControllerProps["rules"];
  trigger: UseFormTrigger<any>;
  control: Control<any, any>;
  resetField: UseFormResetField<any>;
  containerStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
}

export const ValidatedInputText: React.FC<IValidatedInputTextProps> = ({
  title = "",
  maskConfig = "none",
  name,
  rules = {},
  control,
  trigger,
  resetField,
  placeholder,
  autoFocus,
  autoCapitalize,
  placeholderTextColor = COLORS.neutral_50,
  keyboardType = "default",
  maxLength,
  multiline,
  containerStyle,
  textInputStyle,
  onFocus,
  onSubmitEditing,
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
          style: [styles.input, textInputStyle],
          cursorColor: COLORS.primary,
          selectionColor: COLORS.primary,
          maxLength: maxLength,
          keyboardType: keyboardType,
          autoCapitalize: autoCapitalize,
          placeholderTextColor: placeholderTextColor,
          placeholder: placeholder,
          multiline: multiline,
          value: value,
          onChangeText: onChange,
          onSubmitEditing: onSubmitEditing,
          onFocus: (e) => {
            onFocus?.(e);
            setIsFocused(true);
          },
          onBlur: () => {
            onBlur();
            setIsFocused(false);
          },
          autoFocus: autoFocus,
        };

        const inputContainerStyle = [
          styles.inputContainer,
          (isFocused || Boolean(error)) && styles.errorInputContainer,
        ];

        return (
          <View style={containerStyle}>
            <View style={styles.headerContainer}>
              <Typography textAlign="left" style={styles.titleLabel}>
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
                  type={maskConfig?.maskType}
                  options={{ mask: maskConfig?.maskValue }}
                  {...textInputProps}
                />
              )}

              {value && (
                <IconButton
                  style={styles.clearButton}
                  source={IC_CLOSE_DARK}
                  onPress={clearHandler}
                />
              )}
            </View>

            {error?.message && (
              <Typography style={styles.errorLabel}>
                {error?.message}
              </Typography>
            )}
          </View>
        );
      }}
    />
  );
};
