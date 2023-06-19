import { IBanner } from "../types";
import { AOResult, getModelsFromFirebase } from "../helpers";

class BannersService {
  getBanners = (): Promise<AOResult<IBanner[]>> => {
    return getModelsFromFirebase("/banners.json");
  };
}

export default new BannersService();
