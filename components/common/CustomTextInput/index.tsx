import { FC } from "react";
import { View } from "react-native";

import { useFormState } from "react-hook-form";
import {
  typographyStyle_i13,
  typographyStyle_i2,
  typographyStyle_i22,
} from "../../../constants";
import { Typography } from "../Typography";
import {
  IValidatedInputTextProps,
  ValidatedInputText,
} from "../ValidatedInputText";
import styles from "./styles";

interface ICustomTextInputProps extends IValidatedInputTextProps {
  title: string;
}

export const CustomTextInput: FC<ICustomTextInputProps> = ({
  formController,
  name,
  title,
  rules,
  style,
  ...rest
}) => {
  const { errors } = useFormState({ control: formController.control });

  return (
    <View style={[styles.container, style]}>
      <View style={styles.headerContainer}>
        <Typography textAlign="left" style={typographyStyle_i13}>
          {title}
        </Typography>

        {!rules?.required && (
          <Typography textAlign="left" style={typographyStyle_i22}>
            Optional
          </Typography>
        )}
      </View>

      <ValidatedInputText
        name={name}
        formController={formController}
        rules={rules}
        style={[styles.input, style]}
        {...rest}
      />

      {errors[name]?.message && (
        <Typography style={typographyStyle_i2}>
          {String(errors[name]?.message)}
        </Typography>
      )}
    </View>
  );
};
