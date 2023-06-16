import { FC } from "react";
import { Modal, StyleProp, View, ViewStyle } from "react-native";

import { customButtonStyles } from "../../../constants/globalStyles";
import {
  typographyStyle_i4,
  typographyStyle_i9,
} from "../../../constants/typography";
import { CustomButton, Typography } from "../../common";
import { ITypographyStyle } from "../../common/Typography/types";
import styles from "./styles";

interface IConfirmModalProps {
  visible: boolean;
  title: string;
  description: string;
  confirmText?: string;
  confirmButtonTextStyle?: StyleProp<ITypographyStyle>;
  confirmButtonStyle?: StyleProp<ViewStyle>;
  cancelText?: string;
  cancelButtonTextStyle?: StyleProp<ITypographyStyle>;
  cancelButtonStyle?: StyleProp<ViewStyle>;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmModal: FC<IConfirmModalProps> = ({
  visible = false,
  title,
  description,
  confirmText = "Confirm",
  confirmButtonStyle = customButtonStyles.i2,
  confirmButtonTextStyle,
  cancelText = "Cancel",
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
        <Typography style={typographyStyle_i4}>{title}</Typography>

        <Typography style={typographyStyle_i9}>{description}</Typography>

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
