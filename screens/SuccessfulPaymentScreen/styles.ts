import { StyleSheet } from "react-native";

import { COLORS, customButtonStyles } from "../../constants";
import { scaleSize } from "../../utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: scaleSize(16),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.neutral_0,
  },
  image: {
    width: 161,
    height: 132,
    resizeMode: "contain",
  },
  title: {
    marginTop: 24,
  },
  description: {
    marginTop: 4,
    width: 250,
    alignItems: "center",
  },
  button: {
    marginTop: 24,
    width: "100%",
    ...customButtonStyles.i1,
  },
});

export default styles;
