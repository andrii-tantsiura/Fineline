import { ActivityIndicator, StyleProp, View, ViewStyle } from "react-native";

import {
  COLORS,
  IColors,
  containerStyles,
  typographyStyle_i1,
} from "../../../constants";
import { Typography } from "../../common";

interface ILoaderView {
  message?: string;
  spinnerColor?: keyof IColors;
  style?: StyleProp<ViewStyle>;
}

export const LoaderView: React.FC<ILoaderView> = ({
  message = "Loading...",
  spinnerColor = COLORS.neutral_100,
  style,
}) => (
  <View style={[containerStyles.i1, style]}>
    <ActivityIndicator color={spinnerColor} size="large" />
    <Typography style={typographyStyle_i1}>{message}</Typography>
  </View>
);
