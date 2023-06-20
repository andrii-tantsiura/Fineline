import { StackScreenProps } from "@react-navigation/stack";

export type HomeStackParamList = {
  DeliveryDetails: undefined;
  Homepage: undefined;
  AppDataLoader: undefined;
  SuccessfulPaymentScreen: { orderId: string };
};

export type HomeScreenProps = StackScreenProps<HomeStackParamList>;
