import { ImageBackground } from "react-native";

import styles from "./styles";
import { IC_CLOSE_WHITE } from "../../../../../assets/icons";
import { iconButtonStyles } from "../../../../../constants";
import { IBanner } from "../../../../../types";
import { IconButton } from "../../../../common";

interface IBannerItem {
  width: number;
  banner: IBanner;
  onClose: () => void;
}

export const BannerItem: React.FC<IBannerItem> = ({
  width,
  banner,
  onClose = () => {},
}) => (
  <ImageBackground
    style={[styles.container, { width }]}
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
