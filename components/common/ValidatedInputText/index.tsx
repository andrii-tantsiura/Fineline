import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Control,
  Controller,
  UseControllerProps,
  UseFormResetField,
} from "react-hook-form";
import { UseFormTrigger } from "react-hook-form/dist/types";
import {
  Image,
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { TextInputMask, TextInputMaskTypeProp } from "react-native-masked-text";

import { IC_CLOSE_DARK } from "../../../assets/icons";
import { COLORS, iconButtonStyles, textInputStyles } from "../../../constants";
import { IconButton } from "../IconButton";
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
  leftImageSource?: any;
  style?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
}

export const ValidatedInputText: React.FC<IValidatedInputTextProps> = ({
  name,
  maskConfig = "none",
  formController: { control, trigger, resetField },
  rules = {},
  leftImageSource,
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

        const containerStyle = [
          style,
          styles.inputContainer,
          (isFocused || Boolean(error)) && styles.highlightedInputContainer,
        ];

        return (
          <View style={containerStyle}>
            {leftImageSource && (
              <Image style={iconButtonStyles.i2} source={leftImageSource} />
            )}

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
                style={styles.clearButton}
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
