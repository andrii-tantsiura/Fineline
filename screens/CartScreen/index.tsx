import { FC, useEffect } from "react";
import { View } from "react-native";

import { CustomButton } from "../../components/common";
import { CartList, PriceInfo } from "../../components/sections";
import { separatorStyles } from "../../constants";
import { useCart } from "../../hooks";
import { HomeScreenProps } from "../../navigation/HomeStackNavigator/types";
import styles from "./styles";

type Props = HomeScreenProps<"Cart">;

export const CartScreen: FC<Props> = ({ navigation }) => {
  const { cartSubtotal } = useCart();

  function goCheckoutHandler() {
    navigation.navigate("DeliveryDetails");
  }

  useEffect(() => {
    if (cartSubtotal === 0) {
      navigation.goBack();
    }
  }, [cartSubtotal]);

  return (
    <View style={styles.rootContainer}>
      <CartList style={styles.cartList} />

      <View style={separatorStyles.i1} />

      <PriceInfo
        textStyle={styles.subtotal}
        label="Subtotal"
        price={cartSubtotal}
      />

      <CustomButton style={styles.button} onPress={goCheckoutHandler}>
        Checkout
      </CustomButton>
    </View>
  );
};
