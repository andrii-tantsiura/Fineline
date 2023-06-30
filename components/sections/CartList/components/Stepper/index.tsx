import { View } from "react-native";
import { useState } from "react";

import styles from "./styles";
import { IconButton, Typography } from "../../../../common";
import { IC_DELETE_RED, IC_PLUS_RED } from "../../../../../assets/icons";
import {
  iconButtonStyles,
  typographyStyle_i18,
} from "../../../../../constants";

interface IStepper {
  children: number;
  onRemove: () => void;
  onValueChanged: (value: number) => void;
}

export const Stepper: React.FC<IStepper> = ({
  children,
  onRemove,
  onValueChanged,
}) => {
  const [value, setValue] = useState<number>(children);

  function onPlusPressHandler() {
    setValue((currentValue) => currentValue + 1);

    onValueChanged(value + 1);
  }

  return (
    <View style={styles.actionsContainer}>
      <IconButton
        onPress={onRemove}
        source={IC_DELETE_RED}
        style={styles.action}
        imageStyle={iconButtonStyles.i2}
      />

      <Typography style={[typographyStyle_i18, styles.action]}>
        {value}
      </Typography>

      <IconButton
        onPress={onPlusPressHandler}
        source={IC_PLUS_RED}
        style={styles.action}
        imageStyle={iconButtonStyles.i2}
      />
    </View>
  );
};
