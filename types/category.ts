import { IBaseModel } from "./baseModel";

export interface ICategory extends IBaseModel {
  id: string;
  name: string;
  imageUrl: string;
}
