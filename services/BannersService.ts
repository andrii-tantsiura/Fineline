import { IBanner } from "../types";
import { StorageItem } from "../enums";
import {
  getItemFromAsyncStorage,
  storeItemToAsyncStorage,
} from "../helpers/AsyncStorage";
import { AOResult, getModelsFromFirebase } from "../helpers";

class BannersService {
  getBanners = async (): Promise<AOResult<IBanner[]>> => {
    const resultOfReceivingBanners = await getModelsFromFirebase<IBanner>(
      "/banners.json"
    );

    if (resultOfReceivingBanners.isSuccess && resultOfReceivingBanners.result) {
      const closedBanners: string[] | null = await getItemFromAsyncStorage(
        StorageItem.BANNERS
      );

      if (closedBanners) {
        resultOfReceivingBanners.result =
          resultOfReceivingBanners.result.filter(
            (banner) => !closedBanners.includes(banner.id)
          );
      }
    }

    return resultOfReceivingBanners;
  };

  closeBanner = async (bannerId: string): Promise<void> => {
    let closedBanners: string[] | null = await getItemFromAsyncStorage(
      StorageItem.BANNERS
    );

    closedBanners ??= [];
    closedBanners.push(bannerId);

    await storeItemToAsyncStorage(StorageItem.BANNERS, closedBanners);
  };
}

export default new BannersService();
