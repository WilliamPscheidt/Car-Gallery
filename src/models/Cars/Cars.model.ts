import { model } from "mongoose";
import { ICarsDocument } from "./Cars.types";
import CarsSchema from "./Cars.schema";

export const CarsModel = model<ICarsDocument>("Cars", CarsSchema)