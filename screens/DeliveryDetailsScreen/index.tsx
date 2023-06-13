import { FC, useLayoutEffect } from "react";
import { useForm } from "react-hook-form";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";

import { IC_ARROW_LEFT_RED, IC_ARROW_RIGHT_WHITE } from "../../assets/icons";
import {
  CustomButton,
  IconButton,
  ValidatedInputText,
} from "../../components/common";
import {
  iconButtonStyles,
  separatorStyles,
} from "../../constants/globalStyles";
import {
  ADDRESS_RULES,
  COMMENT_RULES,
  NAME_RULES,
  PHONE_RULES,
} from "../../helpers/validationRules";
import { HomeScreenProps } from "../../navigation/HomeStackNavigator/types";
import styles from "./styles";

export const DeliveryDetailsScreen: FC<HomeScreenProps> = ({ navigation }) => {
  const { control, resetField, handleSubmit } = useForm({
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
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackImage: () => (
        <IconButton
          style={iconButtonStyles.i1}
          source={IC_ARROW_LEFT_RED}
          onPress={goBackHandler}
        />
      ),
    });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.rootContainer}>
      <View style={styles.formContainer}>
        <View style={styles.namesContainer}>
          <View style={styles.nameContainer}>
            <ValidatedInputText
              control={control}
              resetField={resetField}
              name="firstName"
              autoCapitalize="words"
              // autoFocus
              title="First Name"
              placeholder="Enter first name"
              maxLength={50}
              rules={NAME_RULES}
            />
          </View>

          <View style={styles.nameContainer}>
            <ValidatedInputText
              autoCapitalize="words"
              control={control}
              resetField={resetField}
              name="lastName"
              title="Last Name"
              placeholder="Enter last name"
              maxLength={50}
              rules={NAME_RULES}
            />
          </View>
        </View>

        <ValidatedInputText
          containerStyle={styles.inputContainer}
          control={control}
          resetField={resetField}
          name="mobileNumber"
          title="Mobile Number"
          keyboardType="phone-pad"
          placeholder="Enter mobile number"
          maxLength={13}
          rules={PHONE_RULES}
        />

        <ValidatedInputText
          containerStyle={styles.inputContainer}
          control={control}
          resetField={resetField}
          name="address"
          title="Address"
          placeholder="Enter address"
          rules={ADDRESS_RULES}
        />

        <ValidatedInputText
          containerStyle={styles.inputContainer}
          control={control}
          resetField={resetField}
          name="comment"
          title="Comment"
          placeholder="Enter your comment"
          rules={COMMENT_RULES}
        />
      </View>

      <View style={styles.buttonContainer}>
        <View style={[separatorStyles.i1, { marginVertical: 16 }]}></View>

        <CustomButton
          style={styles.button}
          imageSource={IC_ARROW_RIGHT_WHITE}
          onPress={handleSubmit(() => {
            console.log("tap");
          })}
        >
          Go to Pay
        </CustomButton>
      </View>
    </ScrollView>
  );
};
