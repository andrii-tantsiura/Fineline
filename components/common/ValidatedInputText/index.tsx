import React from "react";
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

import { IC_CLOSE_DARK } from "../../../assets/icons";
import COLORS from "../../../constants/colors";
import { IconButton } from "../IconButton";
import { Typography } from "../Typography";
import styles from "./styles";

interface IValidatedInputTextProps extends TextInputProps {
  title?: string;
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
      }) => (
        <View style={containerStyle}>
          <Typography textAlign="left" style={styles.titleLabel}>
            {title}
          </Typography>

          <View
            style={[
              styles.inputContainer,
              Boolean(error) && styles.errorInputContainer,
            ]}
          >
            <TextInput
              style={[styles.input, textInputStyle]}
              maxLength={maxLength}
              keyboardType={keyboardType}
              autoCapitalize={autoCapitalize}
              placeholderTextColor={placeholderTextColor}
              placeholder={placeholder}
              multiline={multiline}
              value={value}
              onChangeText={onChange}
              onSubmitEditing={onSubmitEditing}
              onFocus={(e) => {
                onFocus?.(e);
              }}
              onBlur={() => {
                onBlur();
              }}
              autoFocus={autoFocus}
            />

            {value && (
              <IconButton
                style={styles.clearButton}
                source={IC_CLOSE_DARK}
                onPress={clearHandler}
              />
            )}
          </View>

          {error?.message && (
            <Typography style={styles.errorLabel}>{error?.message}</Typography>
          )}
        </View>
      )}
    />
  );
};
