import axios from "axios";

import { API_URL } from "../config";
import { ICategory } from "../types";
import { ICategoriesArray } from "../types/firebase";
import { AOResult, ExecuteAsync, firebaseResponseToModels } from "../helpers";

class CategoriesService {
  getCategories = (): Promise<AOResult<ICategory[]>> =>
    ExecuteAsync(
      async (onFailure: (message: string) => void): Promise<ICategory[]> => {
        const response = await axios.get<ICategoriesArray>(
          API_URL + "/categories.json"
        );

        return firebaseResponseToModels<ICategory>(response.data);
      }
    );
}

export default new CategoriesService();
