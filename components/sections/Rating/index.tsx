import { FC } from "react";
import { Image, StyleProp, View, ViewStyle } from "react-native";

import { IC_STAR_YELLOW } from "../../../assets/icons";
import { Typography } from "../../common";
import styles from "./styles";

interface IRatingProps {
  value: number;
  style?: StyleProp<ViewStyle>;
}

export const Rating: FC<IRatingProps> = ({ value, style }) => {
  const stars = new Array(Math.round(value)).fill(0);

  return (
    <View style={[styles.container, style]}>
      {stars.map((value, index) => (
        <Image
          key={index}
          style={styles.image}
          resizeMode="center"
          source={IC_STAR_YELLOW}
        />
      ))}

      <Typography style={styles.value}>{Number(value).toFixed(1)}</Typography>
    </View>
  );
};
