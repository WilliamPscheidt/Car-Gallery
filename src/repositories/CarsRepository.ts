import mongoose from "mongoose";
import { ICarsDocument } from "../models/Cars/Cars.types";

export class CarsRepository {
    static async insert<T>(model: mongoose.Model<ICarsDocument>, document: T): Promise<boolean> {
        try{
            const newDocument = new model(document)
            await newDocument.save()
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }
}