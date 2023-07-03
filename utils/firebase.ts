import axios from "axios";

import { API_URL } from "../config";
import { AOResult, ExecuteAsync, FailureCallback } from "../helpers/AOResult";
import { getAxiosRequestConfig } from "./responseTransformers";

export const getArrayFromFirebase = <T>(
  path: string,
  reviver?: (key: string, value: any) => any
): Promise<AOResult<T[]>> =>
  ExecuteAsync(async (onFailure: FailureCallback): Promise<T[]> => {
    const response = await axios.get<T[]>(
      API_URL + path,
      getAxiosRequestConfig<T>(reviver)
    );

    return response.data;
  });

export const postModelToFirebase = <T>(
  path: string,
  item: T
): Promise<AOResult<string>> =>
  ExecuteAsync(async (onFailure: FailureCallback): Promise<string> => {
    const response = await axios.post(API_URL + path, item);

    const id = response.data.name;

    return id;
  });
