import { IBanner } from "../types";
import { StorageItem } from "../enums";
import {
  AOResult,
  getItemFromAsyncStorage,
  storeItemToAsyncStorage,
} from "../helpers";
import { getModelsFromFirebase } from "../utils";

class BannersService {
  getBanners = async (): Promise<AOResult<IBanner[]>> => {
    const resultOfReceivingBanners = await getModelsFromFirebase<IBanner>(
      "/banners.json"
    );

    if (resultOfReceivingBanners.isSuccess && resultOfReceivingBanners.result) {
      const closedBanners: string[] | null = await getItemFromAsyncStorage(
        StorageItem.CLOSED_BANNERS
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
      StorageItem.CLOSED_BANNERS
    );

    closedBanners ??= [];
    closedBanners.push(bannerId);

    await storeItemToAsyncStorage(StorageItem.CLOSED_BANNERS, closedBanners);
  };
}

export default new BannersService();
