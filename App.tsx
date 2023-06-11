import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useEffect, useCallback } from "react";
import { StyleSheet, View } from "react-native";

import { Typography } from "./components/common";
import { FontWeightAliases, typographyStyle_i1 } from "./constants/typography";
import { useSplashScreen } from "./hooks/useSplashScreen";
import { ProductsContextProvider } from "./store/ProductsContextProvider";
import { CategoriesContextProvider } from "./store/CategoriesContextProvider";
import CategoriesService from "./services/CategoriesService";
import ProductsService from "./services/ProductsService";

export default function App() {
  const [isAppReady, setIsAppReady, onLayoutRootView] = useSplashScreen();

  const [isFontsLoaded] = useFonts({
    [FontWeightAliases.SemiBold]: require("./assets/fonts/Poppins-SemiBold.ttf"),
    [FontWeightAliases.Medium]: require("./assets/fonts/Poppins-Medium.ttf"),
    [FontWeightAliases.Regular]: require("./assets/fonts/Poppins-Regular.ttf"),
  });

  const loadCategories = useCallback(async () => {
    const categories = await CategoriesService.getCategories();
    console.log(categories);

    const products = await ProductsService.getProducts();
    //console.log(products);
  }, []);

  useEffect(() => {
    if (isFontsLoaded) {
      loadCategories();
      setIsAppReady(true);
    }
  }, [isFontsLoaded]);

  return isAppReady ? (
    <CategoriesContextProvider>
      <ProductsContextProvider>
        <View style={styles.container} onLayout={onLayoutRootView}>
          <StatusBar style="auto" />
          <Typography style={typographyStyle_i1}>Fine Line</Typography>
        </View>
      </ProductsContextProvider>
    </CategoriesContextProvider>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
