import * as SplashScreen from "expo-splash-screen";
import { useState } from "react";

SplashScreen.preventAutoHideAsync();

interface IUseSplashScreenValues {
  hideSplashScreen: () => void;
  onLayoutRootView: () => void;
}

export const useSplashScreen = (): IUseSplashScreenValues => {
  const [isHiddenSplashScreen, setIsHiddenSplashScreen] =
    useState<boolean>(false);

  function hideSplashScreen(): void {
    setIsHiddenSplashScreen(true);
  }

  async function onLayoutRootView() {
    if (isHiddenSplashScreen) {
      await SplashScreen.hideAsync();
    }
  }

  return { hideSplashScreen, onLayoutRootView };
};
