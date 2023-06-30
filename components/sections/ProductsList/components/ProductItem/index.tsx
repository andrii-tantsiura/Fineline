import { View } from "react-native";

import { IC_SHOPPING_CART_WHITE } from "../../../../../assets/icons";
import {
  iconButtonStyles,
  typographyStyle_i12,
  typographyStyle_i17,
  typographyStyle_i3,
} from "../../../../../constants";
import { IProduct } from "../../../../../types";
import { CustomButton, IconButton, Typography } from "../../../../common";
import { ImagePlaceholder } from "../../../ImagePlaceholder";
import styles from "./styles";
import { useCart } from "../../../../../hooks";
import { useEffect, useState } from "react";

interface IProductItem {
  product: IProduct;
  onPress: (product: IProduct) => void;
}

export const ProductItem: React.FC<IProductItem> = ({
  product,
  onPress = (product: IProduct) => {},
}) => {
  const { productsInCart, getProductQuantityById } = useCart();
  const [quantity, setQuantity] = useState<number>();

  function onCartPressHandler() {
    onPress(product);
  }

  useEffect(() => {
    setQuantity(getProductQuantityById(product.id));
  }, [productsInCart]);

  return (
    <View style={styles.wrapperContainer}>
      <ImagePlaceholder
        style={styles.productPreview}
        imageUrl={product.imageUrl}
      />

      <View style={styles.container}>
        <View style={styles.info}>
          <Typography
            style={typographyStyle_i17}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {product.name}
          </Typography>
          <Typography style={typographyStyle_i12}>${product.price}</Typography>
        </View>

        {quantity === 0 ? (
          <IconButton
            onPress={onCartPressHandler}
            source={IC_SHOPPING_CART_WHITE}
            style={styles.shoppingCart}
            imageStyle={iconButtonStyles.i2}
          />
        ) : (
          <CustomButton
            onPress={onCartPressHandler}
            style={[styles.shoppingCart, styles.shoppingCartText]}
            textStyle={typographyStyle_i3}
          >
            {quantity}
          </CustomButton>
        )}
      </View>
    </View>
  );
};
