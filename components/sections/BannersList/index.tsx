import { FlatList, ListRenderItemInfo } from "react-native";

import { useBanners } from "../../../hooks";
import { IBanner } from "../../../types";
import { SCREEN_WIDTH } from "../../../utils";
import { BannerItem } from "./components/BannerItem";
import styles from "./styles";

const FLAT_LIST_MARGIN = 36;

export const BannersList: React.FC = () => {
  const { banners, closeBanner } = useBanners();

  const renderBanner = (bannerData: ListRenderItemInfo<IBanner>) => (
    <BannerItem
      width={SCREEN_WIDTH - FLAT_LIST_MARGIN}
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
