import { FlatList, ListRenderItemInfo } from "react-native";

import styles from "./styles";
import { screenWidth } from "../../../utils";
import { IBanner } from "../../../types";
import { BannerItem } from "./components/BannerItem";
import { useBanners } from "../../../hooks";

interface IBannersList {}

export const BannersList: React.FC<IBannersList> = () => {
  const flatListMargin = 36;

  const [banners, isBannersLoaded, errorMessage, closeBanner] = useBanners();

  const renderBanner = (bannerData: ListRenderItemInfo<IBanner>) => (
    <BannerItem
      width={screenWidth - flatListMargin}
      banner={bannerData.item}
      onClose={() => closeBanner(bannerData.item.id)}
    />
  );

  return banners.length > 0 ? (
    <FlatList
      horizontal
      pagingEnabled
      style={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      data={banners}
      renderItem={renderBanner}
      keyExtractor={(banner: IBanner) => banner.id}
    />
  ) : null;
};
