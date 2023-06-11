import axios from "axios";

import { API_URL } from "../config";
import IProduct from "../types/product";
import IProductsArray from "../types/firebase/product/productsArray";
import { AOResult, ExecuteAsync } from "../helpers/AOResult";

class ProductsService {
  async getProducts(): Promise<AOResult<IProduct[]>> {
    return ExecuteAsync(
      async (onFailure: (message: string) => void): Promise<IProduct[]> => {
        const products: IProduct[] = [];

        const response = await axios.get<IProductsArray>(
          API_URL + "/products.json"
        );

        for (const key in response.data) {
          const tmpProduct = response.data[key];

          const product: IProduct = {
            id: key,
            ...tmpProduct,
          };

          products.push(product);
        }

        return products;
      }
    );
  }
}

export default new ProductsService();
