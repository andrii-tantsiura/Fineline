import { useEffect } from "react";
import { BackHandler } from "react-native";

export const useBackHandler = (onBackPressed: () => boolean) => {
  useEffect(() => {
    const backEventSubscription = BackHandler.addEventListener(
      "hardwareBackPress",
      onBackPressed
    );
    return () => {
      backEventSubscription.remove();
    };
  });
};
