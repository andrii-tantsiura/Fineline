import { FlatList, ListRenderItemInfo } from "react-native";

import styles from "./styles";
import { IBanner } from "../../../types";
import { BannerItem } from "./components/BannerItem";
import { useBanners } from "../../../hooks";

interface IBannersList {}

export const BannersList: React.FC<IBannersList> = () => {
  const [banners, isBannersLoaded, errorMessage, closeBanner] = useBanners();

  const renderBanner = (bannerData: ListRenderItemInfo<IBanner>) => (
    <BannerItem
      onClose={() => closeBanner(bannerData.item.id)}
      banner={bannerData.item}
    />
  );

  return (
    <FlatList
      style={styles.container}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      data={banners}
      renderItem={renderBanner}
      keyExtractor={(banner: IBanner) => banner.id}
    />
  );
};
