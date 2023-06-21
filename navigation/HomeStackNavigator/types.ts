import { StackScreenProps } from "@react-navigation/stack";

export type HomeStackParamList = {
  DeliveryDetails: undefined;
  Homepage: undefined;
  AppDataLoader: undefined;
  SuccessfulPayment: { orderId: string };
  Card: undefined;
};

export type HomeScreenProps = StackScreenProps<HomeStackParamList>;
