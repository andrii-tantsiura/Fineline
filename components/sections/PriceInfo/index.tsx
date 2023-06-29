import { FC } from "react";
import { StyleProp, View } from "react-native";

import { typographyStyle_i16 } from "../../../constants";
import { formatMoney } from "../../../utils";
import { Typography } from "../../common";
import { ITypographyStyle } from "../../common/Typography/types";
import styles from "./styles";

interface IPriceInfo {
  label: string;
  price: number;
  textStyle?: StyleProp<ITypographyStyle>;
}

export const PriceInfo: FC<IPriceInfo> = ({
  label,
  price,
  textStyle = typographyStyle_i16,
}) => (
  <View style={styles.container}>
    <Typography style={textStyle}>{label}</Typography>

    <Typography style={textStyle}>{formatMoney(price)}</Typography>
  </View>
);
