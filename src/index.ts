"use strict";

import {HTTPServer} from "./adapters/httpserver.adapter"

new HTTPServer().server.listen(3000, () => {
    console.log("Server online! =)")
});