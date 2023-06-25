import { useHeaderHeight } from "@react-navigation/elements";
import React, { useEffect, useRef, useState } from "react";
import { Platform, ScrollView, StatusBar, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

import { CustomButton, Stepper, Typography } from "../../components/common";
import { LoaderView, ProductDetails } from "../../components/sections";
import { COLORS } from "../../constants";
import { IProduct } from "../../types";
import { WINDOW_HEIGHT } from "../../utils";
import styles from "./styles";

interface IProductDetailsProps {
  product?: IProduct;
  onConfirm: () => void;
  onClose: () => void;
}

const CartItemSelectorModal: React.FC<IProductDetailsProps> = ({
  product,
  onConfirm,
  onClose,
}) => {
  const modalRef = useRef<any>();
  const headerHeight = useHeaderHeight();

  const [productQuantity, setProductQuantity] = useState<number>(1);
  const [subtotal, setSubtotal] = useState<number>(0);

  useEffect(() => {
    if (product) {
      setSubtotal(product.price * productQuantity);
    }
  }, [productQuantity]);

  useEffect(() => {
    modalRef.current.open();
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor(COLORS.neutral_55);

      return () => StatusBar.setBackgroundColor(COLORS.neutral_0);
    }
  }, []);

  return (
    <RBSheet
      ref={modalRef}
      height={WINDOW_HEIGHT - headerHeight}
      animationType="slide"
      closeOnDragDown
      dragFromTopOnly
      onClose={onClose}
      customStyles={{
        container: styles.modalContainer,
        draggableIcon: styles.draggableIcon,
      }}
    >
      {product ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <ProductDetails product={product} />

          <View style={styles.quantitySelectionContainer}>
            <Stepper value={productQuantity} setValue={setProductQuantity} />

            <Typography style={styles.subtotalText}>
              ${subtotal.toFixed(2)}
            </Typography>
          </View>

          <CustomButton style={styles.addToCartButton} onPress={onConfirm}>
            Add To Cart
          </CustomButton>
        </ScrollView>
      ) : (
        <LoaderView />
      )}
    </RBSheet>
  );
};

export default CartItemSelectorModal;
