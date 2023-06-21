import { HeaderTitleProps } from "@react-navigation/elements";
import {
  StackNavigationOptions,
  createStackNavigator,
} from "@react-navigation/stack";
import React, { FC } from "react";

import { IC_SHOPPING_CART_PINK } from "../../assets/icons";
import { IconButton, Typography } from "../../components/common";
import { COLORS, iconButtonStyles, typographyStyle_i4 } from "../../constants";
import {
  AppDataLoaderScreen,
  DeliveryDetailsScreen,
  SuccessfulPaymentScreen,
  HomeScreen,
  CardScreen,
} from "../../screens";
import { HomeStackParamList } from "./types";

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
        headerShown: false,
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
            imageStyle={iconButtonStyles.i2}
            onPress={() => navigation.navigate("Card")}
          />
        ),
      })}
    />

    <HomeStack.Screen
      name="DeliveryDetails"
      component={DeliveryDetailsScreen}
      options={{
        title: "Delivery Information",
        ...headerOptions,
      }}
    />

    <HomeStack.Screen
      name="SuccessfulPayment"
      component={SuccessfulPaymentScreen}
      options={{
        headerShown: false,
      }}
    />

    <HomeStack.Screen
      name="Card"
      component={CardScreen}
      options={headerOptions}
    />
  </HomeStack.Navigator>
);

export default HomeStackNavigator;
