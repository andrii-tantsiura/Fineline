import { IAds } from "../types";
import { AOResult, getModelsFromFirebase } from "../helpers";

class AdsService {
  getAds = (): Promise<AOResult<IAds[]>> => {
    return getModelsFromFirebase("/ads.json");
  };
}

export default new AdsService();
