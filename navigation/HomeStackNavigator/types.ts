import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { IDelivery } from "../../types";

export type HomeStackParamList = {
  AppDataLoader: undefined;
  Homepage: undefined;
  DeliveryDetails: undefined;
  PaymentsMethod: { deliveryInfo: IDelivery };
  SuccessfulPayment: { orderId: string };
};

export type HomeScreenProps<RouteName extends keyof HomeStackParamList> = {
  navigation: StackNavigationProp<HomeStackParamList, RouteName>;
  route: RouteProp<HomeStackParamList, RouteName>;
};
