import { Request, Response } from 'express';
import { CarsRepository } from '../repositories/CarsRepository';
import { CarsModel } from '../models/Cars/Cars.model';

class CarsController {
    public async getCar(req: Request, res: Response) {
        const {car_title} = req.body;

        try {
            const query_result = await CarsRepository.getCar(CarsModel, {car_title: car_title})
            return res.send({ok: query_result})
        } catch (error) {
            return res.send({error: "error in database"})
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
        const {car_title, car_model, car_type, car_price} = req.query;

        if(await CarsRepository.insertCar(CarsModel,
             { car_title: car_title,
               car_model: car_model,
               car_type: car_type,
               car_price: car_price,
               car_image: req.file?.filename })) {
            return res.send({ok: "inserted", image: req.file?.filename})
        }

        res.send({error: "Error in database query"})
    }

}

export = new CarsController();
