import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import { Typography } from "./components/common";
import { FontWeightAliases, typographyStyle_i1 } from "./constants/typography";
import { useSplashScreen } from "./hooks/useSplashScreen";
import { ProductsContextProvider } from "./store/ProductsContextProvider";
import { CategoriesContextProvider } from "./store/CategoriesContextProvider";
import { AppInitDataComponent } from "./components/AppInitDataComponent";

export default function App() {
  const [isAppResourcesLoaded, setIsAppResourcesLoaded] =
    useState<boolean>(false);
  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);

  const [isHiddenSplashScreen, hideSplashScreen, onLayoutRootView] =
    useSplashScreen();

  const [isFontsLoaded] = useFonts({
    [FontWeightAliases.SemiBold]: require("./assets/fonts/Poppins-SemiBold.ttf"),
    [FontWeightAliases.Medium]: require("./assets/fonts/Poppins-Medium.ttf"),
    [FontWeightAliases.Regular]: require("./assets/fonts/Poppins-Regular.ttf"),
  });

  function onDataLoaded(isDataLoaded: boolean): void {
    setIsDataLoaded(isDataLoaded);
  }

  function onClick() {}

  function DisplayComponentSelection(): React.ReactNode {
    let component: React.ReactNode = <></>;

    if (isAppResourcesLoaded && isDataLoaded) {
      component = (
        <View style={styles.container} onLayout={onLayoutRootView}>
          <StatusBar style="auto" />
          <Typography style={typographyStyle_i1}>Fine Line</Typography>
        </View>
      );
    } else if (isAppResourcesLoaded) {
      component = (
        <>
          <AppInitDataComponent onDataLoaded={onDataLoaded} />
          <View
            style={styles.container}
            onLayout={onLayoutRootView}
            onTouchEnd={onClick}
          >
            <StatusBar style="auto" />
            <Typography style={typographyStyle_i1}>Loadiing data</Typography>
          </View>
        </>
      );
    }

    return component;
  }

  useEffect(() => {
    if (isFontsLoaded) {
      hideSplashScreen();
      setIsAppResourcesLoaded(true);
    }
  }, [isFontsLoaded]);

  return (
    <CategoriesContextProvider>
      <ProductsContextProvider>
        {DisplayComponentSelection()}
      </ProductsContextProvider>
    </CategoriesContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
