import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { Typography } from "./components/common";
import { LoaderView } from "./components/sections/LoaderView";
import { FontWeightAliases } from "./constants/typography";

export default function App() {
  const [isFontsLoaded] = useFonts({
    [FontWeightAliases.SemiBold]: require("./assets/fonts/Poppins-SemiBold.ttf"),
    [FontWeightAliases.Medium]: require("./assets/fonts/Poppins-Medium.ttf"),
    [FontWeightAliases.Regular]: require("./assets/fonts/Poppins-Regular.ttf"),
  });

  return isFontsLoaded ? (
    <View style={styles.container}>
      <Typography size="i18" weight="semiBold" color="neutral_90">
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
