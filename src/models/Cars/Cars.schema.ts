import { Schema } from "mongoose";

const CarsSchema = new Schema({
    car_title: {type: String, required: true},
    car_model: {type: String, required: true},
    car_type: {type: String, required: true},
    car_price: {type: String, required: true}
});

export default CarsSchema