import { StyleSheet } from "react-native";

import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 6,
    paddingTop: 14,
    paddingBottom: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLORS.neutral_40,
  },
  input: {
    flex: 1,
  },
  errorInputContainer: {
    borderColor: COLORS.error,
  },
});

export default styles;
