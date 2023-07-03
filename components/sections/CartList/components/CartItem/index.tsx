import { Image, View } from "react-native";

import {
  typographyStyle_i12,
  typographyStyle_i17,
} from "../../../../../constants";
import { ICartItem } from "../../../../../types";
import { formatMoney } from "../../../../../utils";
import { Typography } from "../../../../common";
import { Stepper } from "../Stepper";
import styles from "./styles";

interface ICartItemProps {
  item: ICartItem;
  onAddToCart: (item: ICartItem) => void;
  onRemoveFromCart: (id: string) => void;
}

export const CartItem: React.FC<ICartItemProps> = ({
  item,
  onAddToCart,
  onRemoveFromCart,
}) => {
  function increaseProductQuantityHandler(value: number) {
    onAddToCart({ ...item, quantity: value - item.quantity });
  }

  function removeFromCartHandler() {
    onRemoveFromCart(item.product.id);
  }

  return (
    <View style={styles.wrapperContainer}>
      <Image
        style={styles.imageProduct}
        source={{
          uri: item.product.imageUrl,
        }}
      />

      <View style={styles.info}>
        <Typography
          style={typographyStyle_i17}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {item.product.name}
        </Typography>

        <View style={styles.container}>
          <Stepper
            onRemove={removeFromCartHandler}
            onValueChanged={increaseProductQuantityHandler}
          >
            {item.quantity}
          </Stepper>

          <Typography style={typographyStyle_i12}>
            {formatMoney(item.product.price * item.quantity)}
          </Typography>
        </View>
      </View>
    </View>
  );
};
