import { ImageBackground } from "react-native";

import styles from "./styles";
import { IC_CLOSE_WHITE } from "../../../../../assets/icons";
import { iconButtonStyles } from "../../../../../constants";
import { IBanner } from "../../../../../types";
import { IconButton } from "../../../../common";

interface IBannerItem {
  banner: IBanner;
  onClose: () => void;
}

export const BannerItem: React.FC<IBannerItem> = ({
  banner,
  onClose = () => {},
}) => {
  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri: banner.imageUrl,
      }}
    >
      <IconButton
        imageStyle={iconButtonStyles.i2}
        source={IC_CLOSE_WHITE}
        onPress={onClose}
      />
    </ImageBackground>
  );
};
