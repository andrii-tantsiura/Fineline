import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import HomeStackNavigator from "./HomeStackNavigator";
import COLORS from "../constants/colors";

type AppRoutesProps = {
  onReady: () => void;
};

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.neutral_0,
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
