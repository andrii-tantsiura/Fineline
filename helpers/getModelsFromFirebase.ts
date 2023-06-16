import axios from "axios";

import { API_URL } from "../config";
import { ExecuteAsync, AOResult, FailureCallback } from "./AOResult";
import { firebaseResponseToModels } from "./firebaseResponseToModels";

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
