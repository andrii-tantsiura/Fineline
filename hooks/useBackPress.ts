import { useEffect } from "react";
import { BackHandler } from "react-native";

export const useBackPress = (onBackPressed: () => void) => {
  useEffect(() => {
    const backEventSubscription = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        onBackPressed();

        return true;
      }
    );
    return () => {
      backEventSubscription.remove();
    };
  }, []);
};
