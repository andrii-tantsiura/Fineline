import { IBaseModel } from "./baseModel";

export interface IProduct extends IBaseModel {
  categoryId: string;
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
  ingredients: string;
}
