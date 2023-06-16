import { View } from "react-native";

import { containerStyles, typographyStyle_i1 } from "../../../constants";
import { Typography } from "../../common";

interface IEmptyViewProps {
  children: React.ReactNode;
}

export const EmptyView: React.FC<IEmptyViewProps> = ({ children }) => (
  <View style={containerStyles.i1}>
    <Typography style={typographyStyle_i1}>{children}</Typography>
  </View>
);
