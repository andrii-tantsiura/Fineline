import { ActivityIndicator, View } from "react-native";

import { Typography } from "../../common";
import {
  COLORS,
  IColors,
  typographyStyle_i1,
  containerStyles,
} from "../../../constants";

interface ILoaderView {
  message?: string;
  spinnerColor?: keyof IColors;
}

export const LoaderView: React.FC<ILoaderView> = ({
  message = "Loading...",
  spinnerColor = COLORS.neutral_100,
}) => (
  <View style={containerStyles.i1}>
    <ActivityIndicator color={spinnerColor} size="large" />
    <Typography style={typographyStyle_i1}>{message}</Typography>
  </View>
);
