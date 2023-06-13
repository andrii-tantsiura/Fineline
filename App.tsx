import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { MenuProvider } from "react-native-popup-menu";
import FlashMessage from "react-native-flash-message";

import { useSplashScreen } from "./hooks";
import AppRoutes from "./navigation/AppRoutes";
import { FontWeightAliases } from "./constants/typography";
import { CategoriesContextProvider, ProductsContextProvider } from "./store";

export default function App() {
  const [isAppResourcesLoaded, setIsAppResourcesLoaded] =
    useState<boolean>(false);

  const [isHiddenSplashScreen, hideSplashScreen, onLayoutRootView] =
    useSplashScreen();

  const [isFontsLoaded] = useFonts({
    [FontWeightAliases.SemiBold]: require("./assets/fonts/Poppins-SemiBold.ttf"),
    [FontWeightAliases.Medium]: require("./assets/fonts/Poppins-Medium.ttf"),
    [FontWeightAliases.Regular]: require("./assets/fonts/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    if (isFontsLoaded) {
      hideSplashScreen();
      setIsAppResourcesLoaded(true);
    }
  }, [isFontsLoaded]);

  return (
    <MenuProvider>
      <CategoriesContextProvider>
        <ProductsContextProvider>
          {isAppResourcesLoaded ? (
            <AppRoutes onReady={onLayoutRootView} />
          ) : null}
        </ProductsContextProvider>
      </CategoriesContextProvider>
      <FlashMessage position="top" />
    </MenuProvider>
  );
}
