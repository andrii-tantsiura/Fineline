import * as SplashScreen from "expo-splash-screen";
import { useCallback, useState } from "react";

SplashScreen.preventAutoHideAsync();

export const useSplashScreen = (): [boolean, () => void, () => void] => {
  const [isHiddenSplashScreen, setIsHiddenSplashScreen] =
    useState<boolean>(false);

  function hideSplashScreen(): void {
    setIsHiddenSplashScreen(true);
  }

  const onLayoutRootView = useCallback(async () => {
    if (isHiddenSplashScreen) {
      await SplashScreen.hideAsync();
    }
  }, [isHiddenSplashScreen]);

  return [isHiddenSplashScreen, hideSplashScreen, onLayoutRootView];
};
