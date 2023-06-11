import axios from "axios";

import { API_URL } from "../config";
import { IProduct } from "../types";
import { IProductsArray } from "../types/firebase";
import { AOResult, ExecuteAsync, firebaseResponseToModels } from "../helpers";

class ProductsService {
  getProducts = (): Promise<AOResult<IProduct[]>> =>
    ExecuteAsync(
      async (onFailure: (message: string) => void): Promise<IProduct[]> => {
        const response = await axios.get<IProductsArray>(
          API_URL + "/products.json"
        );

        return firebaseResponseToModels<IProduct>(response.data);
      }
    );
}

export default new ProductsService();
