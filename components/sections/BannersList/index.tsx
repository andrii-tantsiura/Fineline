import { FlatList, ListRenderItemInfo } from "react-native";

import styles from "./styles";
import { IBanner } from "../../../types";
import { BannerItem } from "./components/BannerItem";
import { useBanners } from "../../../hooks";

interface IBannersList {}

export const BannersList: React.FC<IBannersList> = () => {
  const [banners] = useBanners();

  function onCloseBannerHandler(bannerId: string) {
    console.log(bannerId);
  }

  const renderBanner = (banner: ListRenderItemInfo<IBanner>) => (
    <BannerItem
      onClose={() => onCloseBannerHandler(banner.item.id)}
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
