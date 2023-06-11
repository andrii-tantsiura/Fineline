import { HeaderTitleProps } from "@react-navigation/elements";
import {
  StackNavigationOptions,
  createStackNavigator,
} from "@react-navigation/stack";
import { FC } from "react";

import { Typography } from "../../components/common";
import { typographyStyle_i4 } from "../../constants/typography";
import { HomeScreen, AppDataLoaderScreen } from "../../screens";
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
        headerTitle: "",
        headerShadowVisible: false,
      }}
    />

    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={headerOptions}
    />
  </HomeStack.Navigator>
);

export default HomeStackNavigator;
