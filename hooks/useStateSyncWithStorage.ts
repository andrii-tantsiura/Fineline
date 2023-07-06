import { useEffect, useState } from "react";

import { StorageItem } from "../enums";
import { getItemFromAsyncStorage, storeItemToAsyncStorage } from "../helpers";

export const useStateSyncWithStorage = <T>(
  state: T,
  onStateLoaded: (state: T) => void,
  storageItem: StorageItem
): void => {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  const loadFromStorage = async () => {
    const storedState: T | null = await getItemFromAsyncStorage(storageItem);

    if (storedState) {
      onStateLoaded(storedState);
    }
  };

  useEffect(() => {
    loadFromStorage();
  }, []);

  useEffect(() => {
    if (isInitialized) {
      storeItemToAsyncStorage(storageItem, state);
    } else {
      setIsInitialized(true);
    }
  }, [state]);
};
