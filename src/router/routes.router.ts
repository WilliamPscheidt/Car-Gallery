import {Router} from 'express';

import Server from '../controllers/Server.controller';

const router: Router = Router();

router.get("/", Server.status);

export {router}