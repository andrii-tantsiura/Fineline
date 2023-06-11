import { useFonts } from "expo-font";
import { useEffect } from "react";

import { FontWeightAliases } from "./constants/typography";
import { useSplashScreen } from "./hooks/useSplashScreen";
import AppRoutes from "./navigators/AppRoutes";

export default function App() {
  const [isAppReady, setIsAppReady, onLayoutRootView] = useSplashScreen();

  const [isFontsLoaded] = useFonts({
    [FontWeightAliases.SemiBold]: require("./assets/fonts/Poppins-SemiBold.ttf"),
    [FontWeightAliases.Medium]: require("./assets/fonts/Poppins-Medium.ttf"),
    [FontWeightAliases.Regular]: require("./assets/fonts/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    if (isFontsLoaded) {
      setIsAppReady(true);
    }
  }, [isFontsLoaded]);

  return isAppReady ? <AppRoutes onReady={onLayoutRootView} /> : null;
}
