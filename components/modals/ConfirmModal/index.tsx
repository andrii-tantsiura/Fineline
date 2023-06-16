import { FC } from "react";
import { Modal, StyleProp, View, ViewStyle } from "react-native";

import {
  customButtonStyles,
  typographyStyle_i4,
  typographyStyle_i9,
} from "../../../constants";
import { CustomButton, Typography } from "../../common";
import { ITypographyStyle } from "../../common/Typography/types";
import styles from "./styles";

interface IConfirmModalProps {
  visible: boolean;
  titleText: string;
  descriptionText: string;
  confirmText?: string;
  cancelText?: string;
  confirmButtonTextStyle?: StyleProp<ITypographyStyle>;
  confirmButtonStyle?: StyleProp<ViewStyle>;
  cancelButtonTextStyle?: StyleProp<ITypographyStyle>;
  cancelButtonStyle?: StyleProp<ViewStyle>;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmModal: FC<IConfirmModalProps> = ({
  visible = false,
  titleText,
  descriptionText,
  confirmText = "Confirm",
  cancelText = "Cancel",
  confirmButtonStyle = customButtonStyles.i2,
  confirmButtonTextStyle,
  cancelButtonTextStyle,
  cancelButtonStyle = customButtonStyles.i3,
  onConfirm,
  onCancel,
}) => (
  <Modal
    visible={visible}
    hardwareAccelerated
    statusBarTranslucent
    animationType="fade"
    transparent
  >
    <View style={styles.rootContainer}>
      <View style={styles.dialogContainer}>
        <Typography style={typographyStyle_i4}>{titleText}</Typography>

        <Typography style={typographyStyle_i9}>{descriptionText}</Typography>

        <View style={styles.buttonsContainer}>
          <CustomButton
            style={[cancelButtonStyle, styles.cancelButton]}
            textStyle={cancelButtonTextStyle}
            onPress={onCancel}
          >
            {cancelText}
          </CustomButton>

          <CustomButton
            style={[confirmButtonStyle, styles.confirmButton]}
            textStyle={confirmButtonTextStyle}
            onPress={onConfirm}
          >
            {confirmText}
          </CustomButton>
        </View>
      </View>
    </View>
  </Modal>
);
