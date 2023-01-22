import { Request, Response } from 'express';
import { CarsRepository } from '../repositories/CarsRepository';
import { CarsModel } from '../models/Cars/Cars.model';

class CarsController {
    public async insert(req: Request, res: Response) {
        const {car_model, car_type, car_price} = req.body;

        if(await CarsRepository.insert(CarsModel,
             { car_model: car_model,
               car_type: car_type,
               car_price: car_price })) {
            return res.send({"success": "inserted"})
        }

        res.send({"error": "error in insertion"})
    }
}

export = new CarsController();