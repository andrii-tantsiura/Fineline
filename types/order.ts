import { IDeliveryInfo } from "./deliveryInfo";
import { IPaymentInfo } from "./paymentInfo";

export interface IPurchase {
  productId: string;
  quantity: number;
}

export interface IOrder {
  purchases: IPurchase[];
  deliveryInfo: IDeliveryInfo;
  paymentInfo: IPaymentInfo;
}
