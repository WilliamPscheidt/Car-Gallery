"use strict";

import {HTTPServer} from "./adapters/httpserver.adapter";
import DatabaseServer from "./adapters/DatabaseServer.adapter"

import cluster from "cluster";
import os from 'os';
import process from "process";

new DatabaseServer().connect()

const cpusDisponible = os.cpus().length;

if (cluster.isPrimary){
    console.log(`Primary ${process.pid} is running`);

    for (let processFork = 0; processFork < cpusDisponible; processFork++) {
        cluster.fork();
    }

    cluster.on('exit', (worker) => {
        console.log(`Worker ${worker.process.pid} died`)
    });
} else {

    new HTTPServer().server.listen(3000, () => {
        console.log("Server online! =)");
    });

    console.log(`Worker ${process.pid} started`)
}