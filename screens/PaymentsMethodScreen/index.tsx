import { CommonActions } from "@react-navigation/native";
import { FC, useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";

import { IC_ARROW_LEFT_RED } from "../../assets/icons";
import {
  CustomButton,
  CustomTextInput,
  IFormController,
  IconButton,
} from "../../components/common";
import { ConfirmModal } from "../../components/modals";
import { PriceInfo } from "../../components/sections";
import {
  CARD_NUMBER_MASK,
  CVC_MASK,
  MM_YY_DATE_FORMAT_MASK,
  iconButtonStyles,
  separatorStyles,
  typographyStyle_i12,
} from "../../constants";
import {
  CARD_NUMBER_RULES,
  CVC_RULES,
  MM_YY_DATE_RULES,
  NAME_RULES,
} from "../../helpers";
import { useBackHandler, useCart } from "../../hooks";
import { HomeScreenProps } from "../../navigation/HomeStackNavigator/types";
import { IPaymentInfo } from "../../types";
import styles from "./styles";

type Props = HomeScreenProps<"PaymentsMethod">;

const DELIVERY_COST = 5;

export const PaymentsMethodScreen: FC<Props> = ({ navigation }) => {
  const [isClosingPageConfirmationVisible, setIsClosingConfirmationVisible] =
    useState<boolean>(false);

  const { cartSubtotal } = useCart();

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

  const backButtonPressedHandler = () => {
    goBackHandler();

    return true;
  };

  useBackHandler(backButtonPressedHandler);

  const confirmAndPayHandler = handleSubmit((paymentForm: IPaymentInfo) => {
    console.log("submit data", paymentForm);

    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: "SuccessfulPayment",
            params: { orderId: 25 },
          },
        ],
      })
    );
  });

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
              maskType: "custom",
              maskValue: CARD_NUMBER_MASK,
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
