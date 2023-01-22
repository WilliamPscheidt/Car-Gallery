"use strict";

import {HTTPServer} from "./adapters/httpserver.adapter";
import DatabaseServer from "./adapters/DatabaseServer.adapter"
/**import { Cars } from "./repositories/InsertCars";
import { CarsModel } from "./models/Cars/Cars.model";**/

new DatabaseServer().connect()
/**Cars.insert(CarsModel, {car_model: "Fusca", car_type: "Novo", car_price: "Mais de 8mil"})**/

new HTTPServer().server.listen(3000, () => {
    console.log("Server online! =)");
});