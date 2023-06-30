import { HeaderTitleProps } from "@react-navigation/elements";
import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";

import { IC_ARROW_LEFT_RED, IC_SHOPPING_CART_PINK } from "../../assets/icons";
import { IconButton, Typography } from "../../components/common";
import { iconButtonStyles, typographyStyle_i4 } from "../../constants";
import {
  AppDataLoaderScreen,
  DeliveryDetailsScreen,
  HomeScreen,
  PaymentsMethodScreen,
  SuccessfulPaymentScreen,
} from "../../screens";
import styles from "./styles";
import { HomeScreenProps, HomeStackParamList } from "./types";

const HomeStack = createStackNavigator<HomeStackParamList>();

const headerTitle: FC<HeaderTitleProps> = ({ children }) => (
  <Typography style={typographyStyle_i4}>{children}</Typography>
);

const HomeStackNavigator: FC = () => (
  <HomeStack.Navigator
    initialRouteName="AppDataLoader"
    screenOptions={{
      headerTitleAlign: "center",
      headerShadowVisible: false,
      headerTitle: headerTitle,
      headerBackImage: () => (
        <IconButton
          source={IC_ARROW_LEFT_RED}
          style={styles.backButtonContainer}
          imageStyle={iconButtonStyles.i2}
        />
      ),
    }}
  >
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
      options={({ navigation }: HomeScreenProps<"Homepage">) => ({
        headerRight: () => {
          return (
            <IconButton
              source={IC_SHOPPING_CART_PINK}
              style={styles.cartButtonContainer}
              imageStyle={iconButtonStyles.i2}
              onPress={
                // TODO: replace by navigation to the shopping cart page when it is completed
                () => navigation.navigate("DeliveryDetails")
              }
            />
          );
        },
      })}
    />

    <HomeStack.Screen
      name="DeliveryDetails"
      component={DeliveryDetailsScreen}
      options={{
        title: "Delivery Information",
      }}
    />

    <HomeStack.Screen
      name="PaymentsMethod"
      component={PaymentsMethodScreen}
      options={{
        title: "Payments method",
      }}
    />

    <HomeStack.Screen
      name="SuccessfulPayment"
      component={SuccessfulPaymentScreen}
      options={{
        headerShown: false,
      }}
    />
  </HomeStack.Navigator>
);

export default HomeStackNavigator;
