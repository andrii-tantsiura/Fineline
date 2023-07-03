import { StackNavigationProp } from "@react-navigation/stack";
import { useLayoutEffect } from "react";

import { IC_ARROW_LEFT_RED } from "../assets/icons";
import { IconButton } from "../components/common";
import { iconButtonStyles, imageStyles } from "../constants";
import { HomeStackParamList } from "../navigation/HomeStackNavigator/types";
import { scaleSize } from "../utils";

export const useNavigationBackButton = <T extends keyof HomeStackParamList>(
  navigation: StackNavigationProp<HomeStackParamList, T>,
  onGoBack: () => void
) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <IconButton
          source={IC_ARROW_LEFT_RED}
          onPress={onGoBack}
          style={{
            marginLeft: scaleSize(16),
            ...iconButtonStyles.i1,
          }}
          imageStyle={imageStyles.i1}
        />
      ),
    });
  }, [navigation]);
};
