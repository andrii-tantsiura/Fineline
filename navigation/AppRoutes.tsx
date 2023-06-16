import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import HomeStackNavigator from "./HomeStackNavigator";

type AppRoutesProps = {
  onReady: () => void;
};

const AppRoutes: React.FC<AppRoutesProps> = ({ onReady }) => {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer onReady={onReady}>
        <HomeStackNavigator />
      </NavigationContainer>
    </>
  );
};

export default AppRoutes;
