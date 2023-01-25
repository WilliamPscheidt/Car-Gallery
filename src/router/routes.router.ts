import express, {Router} from 'express';
import multer from 'multer';

import CarsController from '../controllers/Cars.controller';

const router: Router = Router();

import { storage } from "../multerConfig";

const upload = multer({storage: storage});

router.use("/uploads", express.static("uploads"));
router.post("/cars", upload.single("file"), CarsController.insertCar);
router.get("/cars", CarsController.getCar);
router.put("/cars", CarsController.updateCar);
router.delete("/cars", CarsController.deleteCar);

export {router};