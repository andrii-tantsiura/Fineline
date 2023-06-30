import { FlatList, ListRenderItemInfo, ViewProps } from "react-native";

import { CartItem } from "./components/CardItem";
import { useCart } from "../../../hooks";
import { ICartItem } from "../../../types";

interface ICardList {
  style?: ViewProps["style"];
}

export const CardList: React.FC<ICardList> = ({ style }) => {
  const { productsInCart, addToCart, removeFromCart } = useCart();

  const renderCartItem = (cartItemData: ListRenderItemInfo<ICartItem>) => (
    <CartItem
      cartItem={cartItemData.item}
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
