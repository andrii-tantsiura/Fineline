import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

import { Typography } from "./components/common";
import { FontWeightAliases, typographyStyle_i1 } from "./constants/typography";
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
      <StatusBar style="auto" />
      <Typography style={typographyStyle_i1}>Fine Line</Typography>
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
