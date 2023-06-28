import { FC, useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ScrollView, View } from "react-native";

import {
  IC_ARROW_LEFT_RED,
  IC_ARROW_RIGHT_WHITE,
  IC_SEARCH_LIGHT_GRAY,
} from "../../assets/icons";
import {
  CustomButton,
  IFormController,
  IconButton,
} from "../../components/common";
import { CustomTextInput } from "../../components/common/CustomTextInput";
import { ConfirmModal } from "../../components/modals";
import { PHONE_MASK, iconButtonStyles, separatorStyles } from "../../constants";
import {
  ADDRESS_RULES,
  COMMENT_RULES,
  NAME_RULES,
  PHONE_RULES,
} from "../../helpers";
import { useBackHandler } from "../../hooks";
import { HomeScreenProps } from "../../navigation/HomeStackNavigator/types";
import { IDelivery } from "../../types";
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

  const { control, resetField, handleSubmit, trigger, watch, formState } =
    useForm<IDelivery>({
      defaultValues: {
        firstName: "",
        lastName: "",
        mobileNumber: "",
        address: "",
        comment: "",
      },
      mode: "onTouched",
    });

  const hookFormController: IFormController = {
    control,
    trigger,
    resetField,
  };

  const goBackHandler = () => {
    const { firstName, lastName, mobileNumber, address, comment } = watch();

    const isAnyDataEntered =
      firstName !== "" ||
      lastName !== "" ||
      mobileNumber !== "" ||
      address !== "" ||
      comment !== "";

    if (isAnyDataEntered) {
      setIsClosingConfirmationVisible(true);
    } else if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  const openPaymentPageHandler = handleSubmit((delivery: IDelivery) => {
    // TODO: add passing deliveryInfo to PaymentsMethod
    navigation.navigate("PaymentsMethod");
  });

  const backButtonPressedHandler = () => {
    goBackHandler();

    return true;
  };

  useBackHandler(backButtonPressedHandler);

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
              <CustomTextInput
                leftImageSource={IC_SEARCH_LIGHT_GRAY}
                formController={hookFormController}
                name="firstName"
                title="First Name"
                autoCapitalize="words"
                autoFocus
                placeholder="Enter first name"
                rules={NAME_RULES}
              />

              <CustomTextInput
                formController={hookFormController}
                name="lastName"
                title="Last Name"
                placeholder="Enter last name"
                autoCapitalize="words"
                rules={NAME_RULES}
              />
            </View>

            <CustomTextInput
              formController={hookFormController}
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

            <CustomTextInput
              formController={hookFormController}
              name="address"
              title="Address"
              placeholder="Enter address"
              rules={ADDRESS_RULES}
            />

            <CustomTextInput
              style={styles.commentTextInput}
              formController={hookFormController}
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
