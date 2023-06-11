import * as SplashScreen from "expo-splash-screen";
import { useCallback, useState } from "react";

SplashScreen.preventAutoHideAsync();

export const useSplashScreen = (): [
  boolean,
  (value: boolean) => void,
  () => void
] => {
  const [isAppReady, setIsAppReady] = useState(false);

  const onLayoutRootView = useCallback(async () => {
    if (isAppReady) {
      await SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  return [isAppReady, setIsAppReady, onLayoutRootView];
};
