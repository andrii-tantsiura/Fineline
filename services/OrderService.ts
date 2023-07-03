import { AOResult } from "../helpers";
import {
  ICartItem,
  IDeliveryInfo,
  IOrder,
  IPaymentInfo,
  IPurchase,
} from "../types";
import { postModelToFirebase } from "../utils";

class OrderService {
  createOrder = (
    productsInCart: ICartItem[],
    deliveryInfo: IDeliveryInfo,
    paymentInfo: IPaymentInfo
  ): Promise<AOResult<number>> => {
    const purchases: IPurchase[] = productsInCart.map((x) => ({
      productId: x.product.id,
      quantity: x.quantity,
    }));

    const order: IOrder = {
      purchases,
      deliveryInfo,
      paymentInfo,
    };

    return postModelToFirebase<IOrder>("/orders.json", order);
  };
}

export default new OrderService();
