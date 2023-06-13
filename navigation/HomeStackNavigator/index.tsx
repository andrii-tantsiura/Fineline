import { HeaderTitleProps } from "@react-navigation/elements";
import {
  StackNavigationOptions,
  createStackNavigator,
} from "@react-navigation/stack";
import React, { FC } from "react";

import { IC_SHOPPING_CART_PINK } from "../../assets/icons";
import { IconButton, Typography } from "../../components/common";
import { typographyStyle_i4 } from "../../constants/typography";
import { HomeScreen, AppDataLoaderScreen } from "../../screens";
import { HomeStackParamList } from "./types";
import COLORS from "../../constants/colors";

const HomeStack = createStackNavigator<HomeStackParamList>();

const headerTitle: FC<HeaderTitleProps> = ({ children }) => (
  <Typography style={typographyStyle_i4}>{children}</Typography>
);

const headerOptions: StackNavigationOptions = {
  headerTitleAlign: "center",
  headerShadowVisible: false,
  headerTitle,
};

const HomeStackNavigator: FC = () => (
  <HomeStack.Navigator initialRouteName="AppDataLoader">
    <HomeStack.Screen
      name="AppDataLoader"
      component={AppDataLoaderScreen}
      options={{
        ...headerOptions,
        headerTitle: "",
      }}
    />

    <HomeStack.Screen
      name="Homepage"
      component={HomeScreen}
      options={({ navigation }) => ({
        ...headerOptions,
        headerRight: () => (
          <IconButton
            source={IC_SHOPPING_CART_PINK}
            style={{
              backgroundColor: COLORS.neutral_10,
              padding: 8,
              marginRight: 18,
              borderRadius: 8,
            }}
            imageStyle={{
              height: 24,
              width: 24,
            }}
            onPress={() => navigation.navigate("AppDataLoader")}
          />
        ),
      })}
    />
  </HomeStack.Navigator>
);

export default HomeStackNavigator;
