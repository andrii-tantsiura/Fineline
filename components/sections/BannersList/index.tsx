import { FlatList, ListRenderItemInfo } from "react-native";

import styles from "./styles";
import { IBanner } from "../../../types";
import { BannerItem } from "./components/BannerItem";
import { useBanners } from "../../../hooks";

interface IBannersList {}

export const BannersList: React.FC<IBannersList> = () => {
  const [banners, isBannersLoaded, errorMessage, closeBanner] = useBanners();

  const renderBanner = (banner: ListRenderItemInfo<IBanner>) => (
    <BannerItem
      onClose={() => closeBanner(banner.item.id)}
      banner={banner.item}
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
