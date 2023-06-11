import { HeaderTitleProps } from "@react-navigation/elements";
import {
  StackNavigationOptions,
  createStackNavigator,
} from "@react-navigation/stack";
import { FC } from "react";

import { Typography } from "../../components/common";
import { typographyStyle_i4 } from "../../constants/typography";
import { DeliveryDetailsScreen, HomeScreen } from "../../screens";
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
  <HomeStack.Navigator initialRouteName="Home">
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={headerOptions}
    />

    <HomeStack.Screen
      name="DeliveryDetails"
      component={DeliveryDetailsScreen}
      options={{
        title: "Delivery Information",
        ...headerOptions,
      }}
    />
  </HomeStack.Navigator>
);

export default HomeStackNavigator;
