import { CommonActions } from "@react-navigation/native";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";

import {
  CustomButton,
  CustomTextInput,
  IFormController,
} from "../../components/common";
import { ConfirmModal } from "../../components/modals";
import { PriceInfo } from "../../components/sections";
import {
  CVC_MASK,
  MM_YY_DATE_FORMAT_MASK,
  separatorStyles,
  typographyStyle_i12,
} from "../../constants";
import {
  CARD_NUMBER_RULES,
  CVC_RULES,
  MM_YY_DATE_RULES,
  NAME_RULES,
} from "../../helpers";
import { useBackPress, useCart, useNavigationBackButton } from "../../hooks";
import { HomeScreenProps } from "../../navigation/HomeStackNavigator/types";
import AlertService from "../../services/AlertService";
import OrderService from "../../services/OrderService";
import { IOrder, IPaymentInfo, IPurchase } from "../../types";
import styles from "./styles";

const DELIVERY_COST = 5;

type Props = HomeScreenProps<"PaymentsMethod">;

export const PaymentsMethodScreen: FC<Props> = ({ navigation, route }) => {
  const [isClosingPageConfirmationVisible, setIsClosingConfirmationVisible] =
    useState<boolean>(false);

  const { productsInCart, cartSubtotal } = useCart();

  const totalToPay = cartSubtotal + DELIVERY_COST;

  const confirmClosingPageHandler = () => {
    setIsClosingConfirmationVisible(false);

    navigation.goBack();
  };

  const cancelClosingPageHandler = () => {
    setIsClosingConfirmationVisible(false);
  };

  const { control, resetField, handleSubmit, trigger, watch } =
    useForm<IPaymentInfo>({
      defaultValues: {
        cardNumber: "",
        cardHolder: "",
        expirationDate: "",
        cvc: "",
      },
      mode: "onTouched",
    });

  const hookFormController: IFormController = {
    control,
    trigger,
    resetField,
  };

  const goBackHandler = () => {
    const { cardNumber, cardHolder, expirationDate, cvc } = watch();

    const isAnyDataEntered =
      cardNumber !== "" ||
      cardHolder !== "" ||
      expirationDate !== "" ||
      cvc !== "";

    if (isAnyDataEntered) {
      setIsClosingConfirmationVisible(true);
    } else if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  useNavigationBackButton(navigation, goBackHandler);

  useBackPress(goBackHandler);

  const confirmAndPayHandler = handleSubmit(
    async (paymentInfo: IPaymentInfo) => {
      const purchases: IPurchase[] = productsInCart.map((x) => ({
        productId: x.product.id,
        quantity: x.quantity,
      }));

      const order: IOrder = {
        purchases: purchases,
        paymentInfo: paymentInfo,
        deliveryInfo: route.params.deliveryInfo,
      };

      const sendOrderResult = await OrderService.sendOrder(order);

      if (sendOrderResult.isSuccess || sendOrderResult.result) {
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [
              {
                name: "SuccessfulPayment",
                params: { orderId: sendOrderResult.result },
              },
            ],
          })
        );
      } else {
        AlertService.error(sendOrderResult.exception);
      }
    }
  );

  return (
    <>
      <View style={styles.rootContainer}>
        <ConfirmModal
          visible={isClosingPageConfirmationVisible}
          titleText="The data will not be saved"
          descriptionText="Do you really want to close the page?"
          confirmText="Close"
          onConfirm={confirmClosingPageHandler}
          onCancel={cancelClosingPageHandler}
        />

        <View style={styles.formContainer}>
          <CustomTextInput
            formController={hookFormController}
            name="cardNumber"
            title="Card Number"
            placeholder="Enter card number"
            keyboardType="numeric"
            maxLength={19}
            rules={CARD_NUMBER_RULES}
            maskConfig={{
              maskType: "credit-card",
            }}
          />

          <CustomTextInput
            formController={hookFormController}
            name="cardHolder"
            title="Card Holder"
            placeholder="Enter card holder"
            autoCapitalize="words"
            maxLength={50}
            rules={NAME_RULES}
          />

          <View style={styles.inputsRowContainer}>
            <View style={styles.expiryDateInputContainer}>
              <CustomTextInput
                formController={hookFormController}
                name="expirationDate"
                title="Expiration Date"
                placeholder="MM / YY"
                keyboardType="numeric"
                maxLength={5}
                rules={MM_YY_DATE_RULES}
                maskConfig={{
                  maskType: "custom",
                  maskValue: MM_YY_DATE_FORMAT_MASK,
                }}
              />
            </View>

            <View style={styles.cvcInputContainer}>
              <CustomTextInput
                formController={hookFormController}
                name="cvc"
                title="CVC"
                placeholder="Enter CVC"
                keyboardType="numeric"
                maxLength={4}
                rules={CVC_RULES}
                maskConfig={{
                  maskType: "custom",
                  maskValue: CVC_MASK,
                }}
              />
            </View>
          </View>
        </View>

        <View>
          <View style={separatorStyles.i1} />

          <View style={styles.totalContainer}>
            <PriceInfo label="Subtotal" price={cartSubtotal} />

            <PriceInfo label="Delivery" price={DELIVERY_COST} />

            <PriceInfo
              label="Total to Pay"
              price={totalToPay}
              textStyle={typographyStyle_i12}
            />

            <CustomButton
              style={styles.confirmAndPayButton}
              onPress={confirmAndPayHandler}
            >
              Confirm and Pay
            </CustomButton>
          </View>
        </View>
      </View>
    </>
  );
};