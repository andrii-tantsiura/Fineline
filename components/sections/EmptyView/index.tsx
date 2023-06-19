import { StyleProp, View, ViewStyle } from "react-native";

import { Typography } from "../../common";
import { typographyStyle_i1, containerStyles } from "../../../constants";

interface IEmptyViewProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const EmptyView: React.FC<IEmptyViewProps> = ({ children, style }) => (
  <View style={[containerStyles.i1, style]}>
    <Typography style={typographyStyle_i1}>{children}</Typography>
  </View>
);
