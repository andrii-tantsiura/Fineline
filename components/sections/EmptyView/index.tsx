import { View } from "react-native";

import { Typography } from "../../common";
import { typographyStyle_i1 } from "../../../constants/typography";
import styles from "./styles";

interface IEmptyViewProps {
  children: React.ReactNode;
}

export const EmptyView: React.FC<IEmptyViewProps> = ({ children }) => (
  <View style={styles.container}>
    <Typography style={typographyStyle_i1}>{children}</Typography>
  </View>
);
