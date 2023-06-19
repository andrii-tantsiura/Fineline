import { FC, useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ScrollView, View } from "react-native";

import { IC_ARROW_LEFT_RED, IC_ARROW_RIGHT_WHITE } from "../../assets/icons";
import {
  CustomButton,
  IconButton,
  ValidatedInputText,
} from "../../components/common";
import { ConfirmModal } from "../../components/modals";
import { PHONE_MASK, iconButtonStyles, separatorStyles } from "../../constants";
import {
  ADDRESS_RULES,
  COMMENT_RULES,
  NAME_RULES,
  PHONE_RULES,
} from "../../helpers";
import { HomeScreenProps } from "../../navigation/HomeStackNavigator/types";
import { Delivery } from "../../types";
import styles from "./styles";

export const DeliveryDetailsScreen: FC<HomeScreenProps> = ({ navigation }) => {
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
    useForm<Delivery>({
      defaultValues: {
        firstName: "",
        lastName: "",
        mobileNumber: "",
        address: "",
        comment: "",
      },
      mode: "onTouched",
    });

  const goBackHandler = () => {
    const { firstName, lastName, mobileNumber, address, comment } = watch();

    const isAnyDataEntered =
      firstName !== "" ||
      lastName !== "" ||
      mobileNumber !== "" ||
      address !== "";

    if (isAnyDataEntered) {
      setIsClosingConfirmationVisible(true);
    } else {
      navigation.goBack();
    }
  };

  const openPaymentPageHandler = handleSubmit((deliveryForm: Delivery) => {
    console.log("submit data", deliveryForm);

    // TODO: make navigation to the Payment Methods page
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
            <View style={styles.nameInputsContainer}>
              <ValidatedInputText
                control={control}
                trigger={trigger}
                resetField={resetField}
                name="firstName"
                autoCapitalize="words"
                autoFocus
                title="First Name"
                placeholder="Enter first name"
                rules={NAME_RULES}
              />

              <ValidatedInputText
                control={control}
                trigger={trigger}
                resetField={resetField}
                name="lastName"
                title="Last Name"
                placeholder="Enter last name"
                autoCapitalize="words"
                rules={NAME_RULES}
              />
            </View>

            <ValidatedInputText
              control={control}
              trigger={trigger}
              resetField={resetField}
              name="mobileNumber"
              title="Mobile Number"
              maskConfig={{
                maskType: "custom",
                maskValue: PHONE_MASK,
              }}
              keyboardType="phone-pad"
              placeholder="Enter mobile number"
              rules={PHONE_RULES}
              maxLength={16}
            />

            <ValidatedInputText
              control={control}
              trigger={trigger}
              resetField={resetField}
              name="address"
              title="Address"
              placeholder="Enter address"
              rules={ADDRESS_RULES}
            />

            <ValidatedInputText
              textInputStyle={styles.commentTextInput}
              control={control}
              trigger={trigger}
              resetField={resetField}
              name="comment"
              title="Comment"
              placeholder="Enter your comment"
              multiline
              rules={COMMENT_RULES}
            />
          </View>
        </ScrollView>

        <View style={separatorStyles.i1}></View>

        <CustomButton
          style={styles.button}
          imageSource={IC_ARROW_RIGHT_WHITE}
          onPress={openPaymentPageHandler}
        >
          Go to Pay
        </CustomButton>
      </View>
    </>
  );
};
