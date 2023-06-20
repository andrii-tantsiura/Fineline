import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { COLORS } from "../constants";
import HomeStackNavigator from "./HomeStackNavigator";

type AppRoutesProps = {
  onReady: () => void;
};

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.neutral_0,
    primary: COLORS.primary,
  },
};

const AppRoutes: React.FC<AppRoutesProps> = ({ onReady }) => {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer theme={Theme} onReady={onReady}>
        <HomeStackNavigator />
      </NavigationContainer>
    </>
  );
};

export default AppRoutes;
