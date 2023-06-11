import { FC } from "react";
import { View } from "react-native";

import { Typography } from "../../components/common";
import { typographyStyle_i1 } from "../../constants/typography";
import styles from "./styles";

const DeliveryDetailsScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Typography style={typographyStyle_i1}>Fine Line</Typography>
    </View>
  );
};

export default DeliveryDetailsScreen;
