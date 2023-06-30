import { StyleSheet } from "react-native";

import { typographyStyle_i10 } from "../../../constants";
import { scaleSize } from "../../../utils";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    height: scaleSize(16),
    width: scaleSize(16),
  },
  value: {
    marginLeft: 12,
    ...typographyStyle_i10,
  },
});

export default styles;
