import { Document, Model } from "mongoose";

export interface ICars {
    car_title: string,
    car_model: string,
    car_type: string,
    car_price: string,
    car_image: string
}

export interface ICarsDocument extends ICars, Document {}
export type ICarsModel = Model<ICarsDocument>