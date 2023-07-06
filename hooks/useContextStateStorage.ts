import { useEffect, useState } from "react";
import { StorageItem } from "../enums";
import { getItemFromAsyncStorage, storeItemToAsyncStorage } from "../helpers";

export type SetStateAction<T> = {
  type: "SET";
  payload: T;
};

interface IUseContextStateStorage {
  loadFromStorage: () => Promise<void>;
}

export const useContextStateStorage = <T>(
  contextState: T,
  dispatch: React.Dispatch<SetStateAction<T>>,
  storageItem: StorageItem
): IUseContextStateStorage => {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  const loadFromStorage = async () => {
    const storedState: T | null = await getItemFromAsyncStorage(storageItem);

    if (storedState) {
      dispatch({ type: "SET", payload: storedState });
    }
  };

  useEffect(() => {
    if (isInitialized) {
      storeItemToAsyncStorage(storageItem, contextState);
    } else {
      setIsInitialized(true);
    }
  }, [contextState]);

  return { loadFromStorage };
};
