import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

import { Typography } from "./components/common";
import { FontWeightAliases } from "./constants/typography";
import { useSplashScreen } from "./hooks/useSplashScreen";

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

  return isAppReady ? (
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
