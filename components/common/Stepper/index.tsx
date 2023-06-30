import { FC } from "react";
import { View } from "react-native";

import { IC_MINUS_RED, IC_PLUS_RED } from "../../../assets/icons";
import { iconButtonStyles } from "../../../constants";
import { IconButton } from "../IconButton";
import { Typography } from "../Typography";
import styles from "./styles";

interface IStepperProps {
  value: number;
  min?: number;
  max?: number;
  onValueChanged: (value: number) => void;
}

export const Stepper: FC<IStepperProps> = ({
  value,
  min = 1,
  max = 99,
  onValueChanged,
}) => {
  const decrementHandler = () => {
    if (value - 1 >= min) {
      onValueChanged(value - 1);
    }
  };

  const incrementHandler = () => {
    if (value + 1 <= max) {
      onValueChanged(value + 1);
    }
  };

  return (
    <View style={styles.container}>
      <IconButton
        imageStyle={iconButtonStyles.i3}
        source={IC_MINUS_RED}
        onPress={decrementHandler}
      />

      <View style={styles.valueContainer}>
        <Typography style={styles.value}>{value}</Typography>
      </View>

      <IconButton
        imageStyle={iconButtonStyles.i3}
        source={IC_PLUS_RED}
        onPress={incrementHandler}
      />
    </View>
  );
};
