import { FlatList, ListRenderItemInfo, Dimensions } from "react-native";

import styles from "./styles";
import { IBanner } from "../../../types";
import { BannerItem } from "./components/BannerItem";
import { useBanners } from "../../../hooks";

interface IBannersList {}

export const BannersList: React.FC<IBannersList> = () => {
  const { width: screenWidth } = Dimensions.get("window");

  const [banners, isBannersLoaded, errorMessage, closeBanner] = useBanners();

  const renderBanner = (bannerData: ListRenderItemInfo<IBanner>) => (
    <BannerItem
      width={screenWidth - 36}
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
