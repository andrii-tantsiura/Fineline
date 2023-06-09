import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import { Typography } from "./components/common";
import { LoaderView } from "./components/sections/LoaderView";
import { FontWeightAliases } from "./constants/typography";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isAppReady, setAppIsReady] = useState(false);

  const [isFontsLoaded] = useFonts({
    [FontWeightAliases.SemiBold]: require("./assets/fonts/Poppins-SemiBold.ttf"),
    [FontWeightAliases.Medium]: require("./assets/fonts/Poppins-Medium.ttf"),
    [FontWeightAliases.Regular]: require("./assets/fonts/Poppins-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (isAppReady) {
      await SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  useEffect(() => {
    setAppIsReady(true);
  }, []);

  return isAppReady && isFontsLoaded ? (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Typography size="i18" weight="semiBold" color="primary">
        Fine Line
      </Typography>

      <Typography size="i18" weight="medium" color="primary">
        Fine Line
      </Typography>

      <Typography size="i18" weight="regular" color="primary">
        Fine Line
      </Typography>

      <StatusBar style="auto" />
    </View>
  ) : (
    <LoaderView />
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
