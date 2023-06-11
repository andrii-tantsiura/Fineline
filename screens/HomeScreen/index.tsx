import { FC } from "react";
import { View } from "react-native";

import { containerStyles } from "../../constants/globalStyles";
import { HomeScreenProps } from "../../navigation/HomeStackNavigator/types";
import { Typography } from "../../components/common";
import { typographyStyle_i1 } from "../../constants/typography";

export const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={containerStyles.i1}>
      <Typography style={typographyStyle_i1}>Fine Line</Typography>
    </View>
  );
};
