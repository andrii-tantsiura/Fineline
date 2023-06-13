import React from "react";
import {
  Control,
  Controller,
  UseControllerProps,
  UseFormResetField,
} from "react-hook-form";
import {
  StyleProp,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";

import { IC_CLOSE_DARK } from "../../../assets/icons";
import COLORS from "../../../constants/colors";
import {
  typographyStyle_i13,
  typographyStyle_i2,
} from "../../../constants/typography";
import { IconButton } from "../IconButton";
import { Typography } from "../Typography";
import styles from "./styles";

interface IValidatedInputTextProps extends TextInputProps {
  title?: string;
  name: string;
  rules: UseControllerProps["rules"];
  control: Control<any, any>;
  resetField: UseFormResetField<any>;
  containerStyle?: StyleProp<ViewStyle>;
}

export const ValidatedInputText: React.FC<IValidatedInputTextProps> = ({
  title = "",
  name,
  rules = {},
  control,
  resetField,
  placeholder,
  autoFocus,
  autoCapitalize,
  placeholderTextColor = COLORS.neutral_50,
  keyboardType = "default",
  maxLength,
  containerStyle,
  onFocus,
  onSubmitEditing,
}) => {
  const clearHandler = () => resetField(name);

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
              style={styles.input}
              maxLength={maxLength}
              keyboardType={keyboardType}
              autoCapitalize={autoCapitalize}
              placeholderTextColor={placeholderTextColor}
              placeholder={placeholder}
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
              <IconButton source={IC_CLOSE_DARK} onPress={clearHandler} />
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
