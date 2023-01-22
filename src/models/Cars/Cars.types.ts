import { Document, Model } from "mongoose";

export interface ICars {
    car_model: string,
    car_type: string,
    car_price: string
}

export interface ICarsDocument extends ICars, Document {}
export interface ICarsModel extends Model<ICarsDocument> {}