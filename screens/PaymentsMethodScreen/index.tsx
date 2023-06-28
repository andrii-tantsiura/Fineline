import { FC, useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ScrollView, View } from "react-native";

import { CommonActions } from "@react-navigation/native";
import { IC_ARROW_LEFT_RED } from "../../assets/icons";
import {
  CustomButton,
  CustomTextInput,
  IFormController,
  IconButton,
} from "../../components/common";
import { ConfirmModal } from "../../components/modals";
import {
  CARD_NUMBER_MASK,
  CVC_MASK,
  MM_YY_DATE_FORMAT_MASK,
  iconButtonStyles,
  separatorStyles,
} from "../../constants";
import {
  CARD_NUMBER_RULES,
  CVC_RULES,
  MM_YY_DATE_RULES,
  NAME_RULES,
} from "../../helpers";
import { HomeScreenProps } from "../../navigation/HomeStackNavigator/types";
import { IPayment } from "../../types";
import styles from "./styles";

export const PaymentsMethodScreen: FC<HomeScreenProps> = ({ navigation }) => {
  const [isClosingPageConfirmationVisible, setIsClosingConfirmationVisible] =
    useState<boolean>(false);

  const confirmClosingPageHandler = () => {
    setIsClosingConfirmationVisible(false);

    navigation.goBack();
  };

  const cancelClosingPageHandler = () => {
    setIsClosingConfirmationVisible(false);
  };

  const { control, resetField, handleSubmit, trigger, watch } =
    useForm<IPayment>({
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
    } else {
      navigation.goBack();
    }
  };

  const confirmAndPayHandler = handleSubmit((paymentForm: IPayment) => {
    console.log("submit data", paymentForm);

    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: "SuccessfulPayment",
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
      <ConfirmModal
        visible={isClosingPageConfirmationVisible}
        titleText="The data will not be saved"
        descriptionText="Do you really want to close the page?"
        confirmText="Close"
        onConfirm={confirmClosingPageHandler}
        onCancel={cancelClosingPageHandler}
      />

      <View style={styles.rootContainer}>
        <ScrollView>
          <View style={styles.formContainer}>
            <CustomTextInput
              formController={hookFormController}
              name="cardNumber"
              title="Card Number"
              autoFocus
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

            <View style={styles.expiryDateAndCvcContainer}>
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

              <CustomTextInput
                formController={hookFormController}
                name="cvc"
                title="CVC"
                placeholder="Enter CVC"
                keyboardType="numeric"
                maxLength={3}
                rules={CVC_RULES}
                maskConfig={{
                  maskType: "custom",
                  maskValue: CVC_MASK,
                }}
              />
            </View>
          </View>
        </ScrollView>

        <View style={separatorStyles.i1}></View>

        <CustomButton style={styles.button} onPress={confirmAndPayHandler}>
          Confirm and Pay
        </CustomButton>
      </View>
    </>
  );
};
