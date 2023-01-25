import mongoose from "mongoose";
import { ICarsDocument } from "../models/Cars/Cars.types";

export class CarsRepository {
    static async insertCar<T>(model: mongoose.Model<ICarsDocument>, document: T): Promise<boolean> {
        try {
            const newDocument = new model(document)
            await newDocument.save()
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }

    static async getCar(model: mongoose.Model<ICarsDocument>, query: object): Promise<object> {
        return model.find(query);
    }

    static async updateCar(model: mongoose.Model<ICarsDocument>, query: object, update: object): Promise<void> {
        model.updateMany(query, update);
    }

    static async deleteCar(model: mongoose.Model<ICarsDocument>, query: object): Promise<void> {
        model.deleteMany(query);
    }
}