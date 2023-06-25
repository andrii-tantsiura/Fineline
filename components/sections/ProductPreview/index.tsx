import { FC } from "react";
import { Image, ImageStyle, StyleProp, View, ViewStyle } from "react-native";

import { IC_DISH_PLACEHOLDER_LIGHT } from "../../../assets/icons";
import styles from "./styles";

interface IProductPreview {
  imageUrl?: string;
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
}

export const ProductPreview: FC<IProductPreview> = ({
  imageUrl,
  style,
  imageStyle,
}) => {
  const imageSource = imageUrl ? { uri: imageUrl } : IC_DISH_PLACEHOLDER_LIGHT;

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
