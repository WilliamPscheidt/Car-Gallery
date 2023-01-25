import {Router} from 'express';

import CarsController from '../controllers/Cars.controller';

const router: Router = Router();

router.post("/cars", CarsController.insertCar);
router.get("/cars", CarsController.getCar);
router.put("/cars", CarsController.updateCar);
router.delete("/cars", CarsController.deleteCar);

export {router};