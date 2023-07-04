import { FC, useState } from "react";
import {
  Image,
  ImageBackground,
  ImageStyle,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";

import { IC_DISH_PLACEHOLDER_LIGHT } from "../../../assets/icons";
import styles from "./styles";

interface IImagePlaceholder {
  imageUrl?: string;
  placeholderImageSource?: string;
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
}

export const ImagePlaceholder: FC<IImagePlaceholder> = ({
  imageUrl,
  placeholderImageSource = IC_DISH_PLACEHOLDER_LIGHT,
  style,
  imageStyle,
}) => {
  const imageSource = imageUrl ? { uri: imageUrl } : placeholderImageSource;

  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  function loadStartHandler() {
    setIsImageLoaded(false);
  }

  function loadEndHandler() {
    setIsImageLoaded(true);
  }

  return (
    <View style={[styles.container, style]}>
      <ImageBackground
        source={placeholderImageSource}
        style={[styles.image, imageStyle]}
        imageStyle={[
          styles.image,
          imageStyle,
          {
            display: isImageLoaded ? "none" : "flex",
          },
        ]}
      >
        <Image
          source={imageSource}
          style={[styles.image, imageStyle]}
          onLoadStart={loadStartHandler}
          onLoadEnd={loadEndHandler}
        />
      </ImageBackground>
    </View>
  );
};
