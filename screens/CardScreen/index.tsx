import { FC, useLayoutEffect } from "react";
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
import { CardList } from "../../components/sections";
import { useCart } from "../../hooks";

export const CardScreen: FC<HomeScreenProps> = ({ navigation, route }) => {
  const { cartSubtotal } = useCart();

  function goBackHandler() {
    navigation.goBack();
  }

  function onCheckoutHandler() {
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

  return (
    <View style={styles.rootContainer}>
      <CardList style={styles.cardList} />

      <View style={separatorStyles.i1}></View>

      <View style={styles.subtotal}>
        <Typography style={typographyStyle_i12}>Subtotal</Typography>
        <Typography style={typographyStyle_i12}>${cartSubtotal}</Typography>
      </View>

      <CustomButton style={styles.button} onPress={onCheckoutHandler}>
        Checkout
      </CustomButton>
    </View>
  );
};
