import { AOResult } from "../helpers";
import { IProduct } from "../types";
import { getArrayFromFirebase } from "../utils";
import { productReviver } from "../utils";

class ProductsService {
  getProducts = (): Promise<AOResult<IProduct[]>> => {
    return getArrayFromFirebase<IProduct>("/products.json", productReviver);
  };
}

export default new ProductsService();
