import { FlatList, ListRenderItemInfo, ViewProps } from "react-native";

import { CartItem } from "./components/CartItem";
import { useCart } from "../../../hooks";
import { ICartItem } from "../../../types";

interface ICartListProps {
  style?: ViewProps["style"];
}

export const CartList: React.FC<ICartListProps> = ({ style }) => {
  const { productsInCart, addToCart, removeFromCart } = useCart();

  const renderCartItem = (cartItemData: ListRenderItemInfo<ICartItem>) => (
    <CartItem
      item={cartItemData.item}
      onAddToCart={addToCart}
      onRemoveFromCart={removeFromCart}
    />
  );

  return (
    <FlatList
      style={style}
      data={productsInCart}
      renderItem={renderCartItem}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(cartItem: ICartItem) => cartItem.product.id}
    />
  );
};
