import { useHeaderHeight } from "@react-navigation/elements";
import React, { useEffect, useRef, useState } from "react";
import { Platform, ScrollView, StatusBar, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

import { CustomButton, Stepper, Typography } from "../../components/common";
import { ProductDetails } from "../../components/sections";
import { COLORS } from "../../constants";
import { useCart } from "../../hooks";
import { ICartItem, IProduct } from "../../types";
import { SCREEN_HEIGHT, formatMoney } from "../../utils";
import styles from "./styles";

interface ICartItemSelectorModalProps {
  product: IProduct;
  onClosed: () => void;
}

export const CartItemSelectorModal: React.FC<ICartItemSelectorModalProps> = ({
  product,
  onClosed,
}) => {
  const modalRef = useRef<RBSheet>(null);
  const headerHeight = useHeaderHeight();

  const { addToCart, getProductQuantityById } = useCart();
  const [productQuantity, setProductQuantity] = useState<number>(1);
  const [subtotal, setSubtotal] = useState<number>(0);

  const addProductToCartHandler = () => {
    const cartItem: ICartItem = {
      product,
      quantity: productQuantity,
    };

    addToCart(cartItem);
    onClosed();
  };

  useEffect(() => {
    setSubtotal(product.price * productQuantity);
  }, [productQuantity]);

  useEffect(() => {
    const itemsInCartQuantity = getProductQuantityById(product.id);

    if (itemsInCartQuantity > 0) {
      setProductQuantity(itemsInCartQuantity);
    }
  }, []);

  useEffect(() => {
    modalRef.current?.open();

    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor(COLORS.neutral_55);

      return () => StatusBar.setBackgroundColor(COLORS.neutral_0);
    }
  }, []);

  return (
    <RBSheet
      ref={modalRef}
      height={SCREEN_HEIGHT - headerHeight}
      animationType="slide"
      closeOnDragDown
      dragFromTopOnly
      onClose={onClosed}
      customStyles={{
        container: styles.modalContainer,
        draggableIcon: styles.draggableIcon,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProductDetails product={product} />

        <View style={styles.quantitySelectionContainer}>
          <Stepper
            value={productQuantity}
            onValueChanged={setProductQuantity}
          />

          <Typography style={styles.subtotalText}>
            {formatMoney(subtotal)}
          </Typography>
        </View>

        <CustomButton
          style={styles.addProductToCartButton}
          onPress={addProductToCartHandler}
        >
          Add To Cart
        </CustomButton>
      </ScrollView>
    </RBSheet>
  );
};
