import axios from "axios";

import { API_URL } from "../config";
import { AOResult, ExecuteAsync, FailureCallback } from "../helpers";

export function firebaseResponseToModels<T>(data: any) {
  const items: Array<T> = [];

  for (const key in data) {
    const item: T = {
      id: key,
      ...data[key],
    };

    items.push(item);
  }

  return items;
}

export interface IModels<T> {
  [index: string]: T;
}

export const getModelsFromFirebase = <T>(
  path: string
): Promise<AOResult<T[]>> =>
  ExecuteAsync(async (onFailure: FailureCallback): Promise<T[]> => {
    const response = await axios.get<IModels<T>>(API_URL + path);

    return firebaseResponseToModels<T>(response.data);
  });
