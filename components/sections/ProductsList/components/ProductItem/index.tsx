import { View } from "react-native";

import { IC_SHOPPING_CART_WHITE } from "../../../../../assets/icons";
import {
  iconButtonStyles,
  typographyStyle_i12,
  typographyStyle_i17,
} from "../../../../../constants";
import { IProduct } from "../../../../../types";
import { IconButton, Typography } from "../../../../common";
import { ImagePlaceholder } from "../../../ImagePlaceholder";
import styles from "./styles";

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
      <ImagePlaceholder
        style={styles.productPreview}
        imageUrl={product.imageUrl}
      />

      <View style={styles.container}>
        <View style={styles.info}>
          <Typography style={typographyStyle_i17}>{product.name}</Typography>
          <Typography style={typographyStyle_i12}>${product.price}</Typography>
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
