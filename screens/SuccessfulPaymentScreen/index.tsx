import { FC } from "react";
import { Image, View } from "react-native";

import { PIC_THANK_YOU } from "../../assets/icons";
import { CustomButton, Typography } from "../../components/common";
import { typographyStyle_i6, typographyStyle_i8 } from "../../constants";
import { HomeScreenProps } from "../../navigation/HomeStackNavigator/types";
import styles from "./styles";

type Props = HomeScreenProps<"SuccessfulPayment">;

export const SuccessfulPaymentScreen: FC<Props> = ({ navigation, route }) => {
  const orderId = route.params.orderId;

  function onContinueShoppingHandler() {
    navigation.replace("Homepage");
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={PIC_THANK_YOU} />

      <Typography style={[typographyStyle_i6, styles.title]}>
        Thank You!
      </Typography>

      <Typography
        textAlign="center"
        style={[typographyStyle_i8, styles.description]}
      >
        Your order #{orderId} has been successfully placed
      </Typography>

      <CustomButton style={styles.button} onPress={onContinueShoppingHandler}>
        Continue Shopping
      </CustomButton>
    </View>
  );
};
