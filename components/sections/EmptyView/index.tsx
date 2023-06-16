import { View } from "react-native";

import styles from "./styles";
import { Typography } from "../../common";
import { typographyStyle_i1 } from "../../../constants";

interface IEmptyViewProps {
  children: React.ReactNode;
}

export const EmptyView: React.FC<IEmptyViewProps> = ({ children }) => (
  <View style={styles.container}>
    <Typography style={typographyStyle_i1}>{children}</Typography>
  </View>
);
