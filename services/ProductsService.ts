import { IProduct } from "../types";
import { AOResult, getModelsFromFirebase } from "../helpers";

class ProductsService {
  getProducts = (): Promise<AOResult<IProduct[]>> => {
    return getModelsFromFirebase("/products.json");
  };
}

export default new ProductsService();
