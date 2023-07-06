import { useEffect, useState } from "react";

import { StorageItem } from "../enums";
import { getItemFromAsyncStorage, storeItemToAsyncStorage } from "../helpers";

export type SetStateAction<T> = {
  type: "SET";
  payload: T;
};

export const useContextStateStorage = <T>(
  contextState: T,
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
      storeItemToAsyncStorage(storageItem, contextState);
    } else {
      setIsInitialized(true);
    }
  }, [contextState]);
};
