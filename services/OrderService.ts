import { AOResult } from "../helpers";
import { IOrder } from "../types";
import { postModelToFirebase } from "../utils";

class OrderService {
  sendOrder = (order: IOrder): Promise<AOResult<number>> => {
    return postModelToFirebase("/orders.json", order);
  };
}

export default new OrderService();
