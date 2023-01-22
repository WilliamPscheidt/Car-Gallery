import {Router} from 'express';

import CarsController from '../controllers/Cars.controller';

const router: Router = Router();

router.post("/cars", CarsController.insert);

export {router};