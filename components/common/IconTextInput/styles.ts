import { StyleSheet } from "react-native";

import { scaleSize } from "../../../utils";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: scaleSize(8),
    paddingHorizontal: scaleSize(12),
  },

  input: {
    flex: 1,
    alignSelf: "stretch",
    marginTop: 4,
  },
});

export default styles;
