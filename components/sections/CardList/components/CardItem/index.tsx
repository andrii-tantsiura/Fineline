import { View, Image } from "react-native";

import styles from "./styles";
import { IconButton, Typography } from "../../../../common";
import {
  typographyStyle_i17,
  typographyStyle_i12,
  typographyStyle_i18,
  iconButtonStyles,
} from "../../../../../constants";
import { IC_DELETE_RED, IC_PLUS_RED } from "../../../../../assets/icons";
import { ICartItem } from "../../../../../types";
import { Stepper } from "../Stepper";

interface ICartItemComponent {
  cartItem: ICartItem;
  onAddToCart: (item: ICartItem) => void;
  onRemoveFromCart: (id: string) => void;
}

export const CartItem: React.FC<ICartItemComponent> = ({
  cartItem,
  onAddToCart,
  onRemoveFromCart,
}) => {
  function onIncreaseProductQuantityHandler(value: number) {
    onAddToCart({ ...cartItem, quantity: value - cartItem.quantity });
  }

  function onRemoveFromCartHandler() {
    onRemoveFromCart(cartItem.product.id);
  }

  return (
    <View style={styles.wrapperContainer}>
      <Image
        style={styles.imageProduct}
        source={{
          uri: cartItem.product.imageUrl,
        }}
      />

      <View style={styles.info}>
        <Typography
          style={typographyStyle_i17}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {cartItem.product.name}
        </Typography>

        <View style={styles.container}>
          <Stepper
            onRemove={onRemoveFromCartHandler}
            onValueChanged={onIncreaseProductQuantityHandler}
          >
            {cartItem.quantity}
          </Stepper>

          <Typography style={typographyStyle_i12}>
            ${cartItem.product.price}
          </Typography>
        </View>
      </View>
    </View>
  );
};
