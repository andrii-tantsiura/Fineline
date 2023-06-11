import axios from "axios";

import { API_URL } from "../config";
import ICategory from "../types/category";
import ICategoriesArray from "../types/firebase/category/categoriesArray";
import { AOResult, ExecuteAsync } from "../helpers/AOResult";

class CategoriesService {
  async getCategories(): Promise<AOResult<ICategory[]>> {
    return ExecuteAsync(
      async (onFailure: (message: string) => void): Promise<ICategory[]> => {
        const categories: ICategory[] = [];

        const response = await axios.get<ICategoriesArray>(
          API_URL + "/categories.json"
        );

        for (const key in response.data) {
          const tmpCategory = response.data[key];

          const category: ICategory = {
            id: key,
            ...tmpCategory,
          };

          categories.push(category);
        }

        return categories;
      }
    );
  }
}

export default new CategoriesService();
