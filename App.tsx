import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { MenuProvider } from "react-native-popup-menu";
import FlashMessage from "react-native-flash-message";

import { useSplashScreen } from "./hooks";
import AppRoutes from "./navigation/AppRoutes";
import { FontWeightAliases } from "./constants";
import {
  CategoriesContextProvider,
  ProductsContextProvider,
  BannersContextProvider,
} from "./store";

export default function App() {
  const [isAppResourcesLoaded, setIsAppResourcesLoaded] =
    useState<boolean>(false);

  const [hideSplashScreen, onLayoutRootView] = useSplashScreen();

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
      <BannersContextProvider>
        <CategoriesContextProvider>
          <ProductsContextProvider>
            {isAppResourcesLoaded ? (
              <AppRoutes onReady={onLayoutRootView} />
            ) : null}
          </ProductsContextProvider>
        </CategoriesContextProvider>
      </BannersContextProvider>
      <FlashMessage position="top" />
    </MenuProvider>
  );
}
