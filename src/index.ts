"use strict";

import {HTTPServer} from "./adapters/httpserver.adapter";
import DatabaseServer from "./adapters/DatabaseServer.adapter"

new DatabaseServer().connect()
new HTTPServer().server.listen(3000, () => {
    console.log("Server online! =)");
});