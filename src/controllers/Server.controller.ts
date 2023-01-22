import { Request, Response } from 'express';

class Server {
    public status(req: Request, res: Response) {
        res.send({"ok": "server running"})
    }
}

export = new Server()