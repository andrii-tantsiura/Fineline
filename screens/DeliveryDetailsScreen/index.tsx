import { FC, useLayoutEffect } from "react";
import { View } from "react-native";

import { IC_ARROW_LEFT_RED } from "../../assets/icons";
import { IconButton, Typography } from "../../components/common";
import {
  containerStyles,
  iconButtonStyles,
} from "../../constants/globalStyles";
import { typographyStyle_i1 } from "../../constants/typography";
import { HomeScreenProps } from "../../navigation/HomeStackNavigator/types";

export const DeliveryDetailsScreen: FC<HomeScreenProps> = ({ navigation }) => {
  const goBackHandler = () => {
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackImage: () => (
        <IconButton
          style={iconButtonStyles.i1}
          source={IC_ARROW_LEFT_RED}
          onPress={goBackHandler}
        />
      ),
    });
  }, []);

  return (
    <View style={containerStyles.i1}>
      <Typography style={typographyStyle_i1}>Fine Line</Typography>
    </View>
  );
};
