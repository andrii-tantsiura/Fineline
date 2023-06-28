import { useHeaderHeight } from "@react-navigation/elements";
import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Platform, ScrollView, StatusBar, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

import { CustomButton, Stepper, Typography } from "../../components/common";
import { LoaderView, ProductDetails } from "../../components/sections";
import { COLORS } from "../../constants";
import { CartContext } from "../../store";
import { IProduct } from "../../types";
import { SCREEN_HEIGHT } from "../../utils";
import styles from "./styles";

interface ICartItemSelectorModalProps {
  product?: IProduct | null;
  setVisible: Dispatch<SetStateAction<boolean>>;
  onClose?: () => {};
}

export const CartItemSelectorModal: React.FC<ICartItemSelectorModalProps> = ({
  product,
  setVisible,
  onClose,
}) => {
  const modalRef = useRef<RBSheet>(null);
  const headerHeight = useHeaderHeight();
  const cartContext = useContext(CartContext);

  const [productQuantity, setProductQuantity] = useState<number>(1);
  const [subtotal, setSubtotal] = useState<number>(0);

  const closeHandler = () => {
    setVisible(false);
    onClose?.();
  };

  const addProductToCartHandler = () => {
    if (product) {
      if (cartContext.products.find((x) => x.product.id === product.id)) {
        cartContext.increaseProductQuantity(product.id, productQuantity);
      } else {
        cartContext.addProduct(product, productQuantity);
      }

      closeHandler();
    }
  };

  useEffect(() => {
    if (product) {
      setSubtotal(product.price * productQuantity);
    }
  }, [productQuantity]);

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
      onClose={closeHandler}
      customStyles={{
        container: styles.modalContainer,
        draggableIcon: styles.draggableIcon,
      }}
    >
      {product ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <ProductDetails product={product} />

          <View style={styles.quantitySelectionContainer}>
            <Stepper
              value={productQuantity}
              onValueChanged={setProductQuantity}
            />

            <Typography style={styles.subtotalText}>
              ${subtotal.toFixed(2)}
            </Typography>
          </View>

          <CustomButton
            style={styles.addProductToCartButton}
            onPress={addProductToCartHandler}
          >
            Add To Cart
          </CustomButton>
        </ScrollView>
      ) : (
        <LoaderView />
      )}
    </RBSheet>
  );
};
