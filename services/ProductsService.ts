import { AOResult } from "../helpers";
import { IProduct } from "../types";
import { getModelsFromFirebase } from "../utils";

class ProductsService {
  getProducts = (): Promise<AOResult<IProduct[]>> => {
    return getModelsFromFirebase("/products.json");
  };
}

export default new ProductsService();
