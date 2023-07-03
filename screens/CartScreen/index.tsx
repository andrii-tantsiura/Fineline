import { FC, useEffect, useLayoutEffect } from "react";
import { View } from "react-native";

import styles from "./styles";
import { IC_ARROW_LEFT_RED } from "../../assets/icons";
import {
  iconButtonStyles,
  separatorStyles,
  typographyStyle_i12,
} from "../../constants";
import { HomeScreenProps } from "../../navigation/HomeStackNavigator/types";
import { CustomButton, IconButton, Typography } from "../../components/common";
import { CartList } from "../../components/sections";
import { useCart } from "../../hooks";

type Props = HomeScreenProps<"Cart">;

export const CartScreen: FC<Props> = ({ navigation }) => {
  const { cartSubtotal } = useCart();

  function goBackHandler() {
    navigation.goBack();
  }

  function goCheckoutHandler() {
    navigation.navigate("DeliveryDetails");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <IconButton
          source={IC_ARROW_LEFT_RED}
          onPress={goBackHandler}
          style={styles.backButton}
          imageStyle={iconButtonStyles.i2}
        />
      ),
    });
  }, []);

  useEffect(() => {
    if (cartSubtotal === 0) {
      goBackHandler();
    }
  }, [cartSubtotal]);

  return (
    <View style={styles.rootContainer}>
      <CartList style={styles.cartList} />

      <View style={separatorStyles.i1}></View>

      <View style={styles.subtotal}>
        <Typography style={typographyStyle_i12}>Subtotal</Typography>
        <Typography style={typographyStyle_i12}>${cartSubtotal}</Typography>
      </View>

      <CustomButton style={styles.button} onPress={goCheckoutHandler}>
        Checkout
      </CustomButton>
    </View>
  );
};
