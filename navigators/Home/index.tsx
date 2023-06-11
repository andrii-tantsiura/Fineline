import { createStackNavigator } from "@react-navigation/stack";
import { FC } from "react";

import DeliveryDetailsScreen from "../../screens/DeliveryDetailsScreen";
import { HomeStackProps } from "./types";

const HomeStack = createStackNavigator<HomeStackProps>();

const HomeStackNavigator: FC = () => (
  <HomeStack.Navigator initialRouteName="DeliveryDetails">
    <HomeStack.Screen
      name="DeliveryDetails"
      component={DeliveryDetailsScreen}
    />
  </HomeStack.Navigator>
);

export default HomeStackNavigator;
