import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import HomeStackNavigator from "./Home";

type AppRoutesProps = {
  onReady: () => void;
};

const AppRoutes: React.FC<AppRoutesProps> = ({ onReady }) => {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer onReady={onReady}>
        <HomeStackNavigator />
      </NavigationContainer>
    </>
  );
};

export default AppRoutes;
