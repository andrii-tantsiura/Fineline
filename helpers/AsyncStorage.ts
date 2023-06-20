import AsyncStorage from "@react-native-community/async-storage";

import { StorageItem } from "../enums";

export const getItemFromAsyncStorage = async <T>(
  item: StorageItem
): Promise<T | null> => {
  let value: T | null = null;

  try {
    const data = await AsyncStorage.getItem(item);

    if (data) {
      value = JSON.parse(data);
    }
  } catch (ex) {
    console.log("getItemFromAsyncStorage error", ex);
  }

  return value;
};

export const storeItemToAsyncStorage = async (
  item: StorageItem,
  value: any
) => {
  try {
    const jsonData = JSON.stringify(value);

    await AsyncStorage.setItem(item, jsonData);
  } catch (ex) {
    console.log("storeItemToAsyncStorage error", ex);
  }
};
