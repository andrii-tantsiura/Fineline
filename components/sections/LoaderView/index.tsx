import { ActivityIndicator, Text, View } from "react-native";

import COLORS, { IColors } from "../../../constants/colors";
import { Typography } from "../../common";
import { typographyStyle_i1 } from "../../../constants/typography";
import styles from "./styles";

interface ILoaderView {
  message?: string;
  spinnerColor?: keyof IColors;
}

export const LoaderView: React.FC<ILoaderView> = ({
  message = "Loading...",
  spinnerColor = COLORS.neutral_100,
}) => (
  <View style={styles.container}>
    <ActivityIndicator color={spinnerColor} size="large" />
    <Typography style={typographyStyle_i1}>{message}</Typography>
  </View>
);
