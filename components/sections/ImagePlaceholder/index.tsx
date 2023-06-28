import { FC } from "react";
import { Image, ImageStyle, StyleProp, View, ViewStyle } from "react-native";

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

  return (
    <View style={[styles.container, style]}>
      <Image
        style={[styles.image, imageStyle]}
        resizeMode="contain"
        source={imageSource}
      />
    </View>
  );
};
