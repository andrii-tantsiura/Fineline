import { View, Image } from "react-native";

import styles from "./styles";
import { Typography } from "../../../components/common";
import {
  typographyStyle_i6,
  typographyStyle_i8,
} from "../../../constants/typography";
import { PIC_NO_SEARCH_RESULT } from "../../../assets/icons";

export const EmptyList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={PIC_NO_SEARCH_RESULT} />
      <Typography style={typographyStyle_i6}>Nothing Found</Typography>
      <Typography style={typographyStyle_i8}>
        Try to change the request
      </Typography>
    </View>
  );
};
