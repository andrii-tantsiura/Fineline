import { View, Image } from "react-native";

import styles from "./styles";
import { IProduct } from "../../../../../types";
import { IconButton, Typography } from "../../../../common";
import {
  typographyStyle_i17,
  typographyStyle_i12,
  iconButtonStyles,
} from "../../../../../constants";
import { IC_SHOPPING_CART_WHITE } from "../../../../../assets/icons";

interface IProductItem {
  product: IProduct;
  onPress: (product: IProduct) => void;
}

export const ProductItem: React.FC<IProductItem> = ({
  product,
  onPress = (product: IProduct) => {},
}) => {
  function onCartPressHandler() {
    onPress(product);
  }

  return (
    <View style={styles.wrapperContainer}>
      <Image
        style={styles.imageProduct}
        source={{
          uri: product.imageUrl,
        }}
      />

      <View style={styles.container}>
        <View style={styles.info}>
          <Typography style={typographyStyle_i17}>{product.name}</Typography>
          <Typography style={typographyStyle_i12}>$ {product.price}</Typography>
        </View>

        <IconButton
          onPress={onCartPressHandler}
          source={IC_SHOPPING_CART_WHITE}
          style={styles.shoppingCart}
          imageStyle={iconButtonStyles.i2}
        />
      </View>
    </View>
  );
};
