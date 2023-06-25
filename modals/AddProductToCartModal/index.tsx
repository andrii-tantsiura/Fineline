import { useHeaderHeight } from "@react-navigation/elements";
import React, { useEffect, useRef } from "react";
import { Platform, ScrollView, StatusBar } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

import { IC_ARROW_RIGHT_WHITE } from "../../assets/icons";
import { CustomButton } from "../../components/common";
import { LoaderView, ProductDetails } from "../../components/sections";
import { COLORS } from "../../constants";
import { IProduct } from "../../types";
import { WINDOW_HEIGHT } from "../../utils";
import styles from "./styles";

// TODO: calculate actual height of header

interface IProductDetailsProps {
  product?: IProduct;
  onAddProductToCart: () => void;
  onClose: () => void;
}

const AddProductToCartModal: React.FC<IProductDetailsProps> = ({
  product,
  onAddProductToCart,
  onClose,
}) => {
  const modalRef = useRef<any>();
  const headerHeight = useHeaderHeight();

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
      closeOnDragDown
      animationType="slide"
      onClose={onClose}
      customStyles={{
        container: styles.modalContainer,
        draggableIcon: styles.draggableIcon,
      }}
    >
      {product ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <ProductDetails product={product} />

          <CustomButton
            style={styles.addToCartButton}
            imageSource={IC_ARROW_RIGHT_WHITE}
            onPress={onAddProductToCart}
          >
            Go to Pay
          </CustomButton>
        </ScrollView>
      ) : (
        <LoaderView />
      )}
    </RBSheet>
  );
};

export default AddProductToCartModal;
