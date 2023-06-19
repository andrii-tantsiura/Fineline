import { Image, View } from "react-native";

import styles from "./styles";
import { IBanner } from "../../../../../types";

interface IBannerItem {
  banner: IBanner;
  onClose: () => void;
}

export const BannerItem: React.FC<IBannerItem> = ({
  banner,
  onClose = () => {},
}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: banner.imageUrl,
        }}
      />
    </View>
  );
};
