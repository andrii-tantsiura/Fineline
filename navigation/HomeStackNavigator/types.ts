import { StackScreenProps } from "@react-navigation/stack";

export type HomeStackParamList = {
  DeliveryDetails: undefined;
  Homepage: undefined;
  AppDataLoader: undefined;
  SuccessfulPayment: { orderId: string };
  Cart: undefined;
};

export type HomeScreenProps = StackScreenProps<HomeStackParamList>;
