import { Request, Response } from 'express';
import { CarsRepository } from '../repositories/CarsRepository';
import { CarsModel } from '../models/Cars/Cars.model';

class CarsController {
    public async getCar(req: Request, res: Response) {
        const {car_id} = req.body;

        try {
            const query_result = CarsRepository.getCar(CarsModel, {car_id: car_id})
            return res.send({ok: query_result})
        } catch (error) {
            return res.send({error: "error in database query"})
        }
    }

    public async updateCar(req: Request, res: Response) {
        const {car_id, newCar_title, newCar_model, newCar_type, newCar_price} = req.body;

        try {
            CarsRepository.updateCar(CarsModel, {car_id: car_id}, {car_title: newCar_title, car_mode: newCar_model, car_type: newCar_type, car_price: newCar_price})
        } catch(error){
            return res.send({"error": "error in database query"})
        }

        res.send({ok: "Car updated"})
    }

    public async deleteCar(req: Request, res: Response) {
        const {car_id} = req.body;

        try {
            CarsRepository.deleteCar(CarsModel, {car_id})
        } catch(error) {
            return res.send({"error": "error in database query"})
        }

        res.send({ok: "Car deleted"})
    }

    public async insertCar(req: Request, res: Response) {
        const {car_title, car_model, car_type, car_price} = req.body;

        if(await CarsRepository.insertCar(CarsModel,
             { car_title: car_title,
               car_model: car_model,
               car_type: car_type,
               car_price: car_price })) {
            return res.send({ok: "inserted"})
        }

        res.send({error: "Error in database query"})
    }

}

export = new CarsController();