import { FC } from "react";
import { Image, View } from "react-native";

import { IC_DISH_PLACEHOLDER_LIGHT } from "../../../assets/icons";
import styles from "./styles";

interface IProductPreview {
  imageUrl?: string;
}

export const ProductPreview: FC<IProductPreview> = ({ imageUrl }) => {
  const imageSource = imageUrl ? { uri: imageUrl } : IC_DISH_PLACEHOLDER_LIGHT;

  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode="contain" source={imageSource} />
    </View>
  );
};
