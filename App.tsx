import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { StyleSheet, Text, View } from "react-native";
import { useCallback, useEffect, useState } from "react";

import CategoriesService from "./services/CategoriesService";
import ProductsService from "./services/ProductsService";
import { ProductsContextProvider } from "./store/ProductsContextProvider";
import { CategoriesContextProvider } from "./store/CategoriesContextProvider";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  const loadCategories = useCallback(async () => {
    const categories = await CategoriesService.getCategories();
    //console.log(categories);

    const products = await ProductsService.getProducts();
    //console.log(products);
  }, []);

  useEffect(() => {
    loadCategories();
    // Pre-load fonts, data....
    setAppIsReady(true);
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <CategoriesContextProvider>
      <ProductsContextProvider>
        <View style={styles.container} onLayout={onLayoutRootView}>
          <Text>Open up App.tsx to start working on your app!</Text>
          <StatusBar style="auto" />
        </View>
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
