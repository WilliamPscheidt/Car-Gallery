import mongoose, { Mongoose } from "mongoose"
import { configurations } from "../configurations";

class DatabaseServer {
    private connection!: mongoose.Connection;
    private uri = configurations.database.connection_string;

    public async connect(): Promise<void> {
        try {
            await mongoose.connect(this.uri)
            console.log("MongoDB connected")
        } catch (error) {
            console.log("MongoDB error", error)
        }
    }

    public async disconnect(): Promise<void> {
        try {
            await this.connection.close();
            console.log("MongoDB disconnected");
        } catch(error) {
            console.log("Error on MongoDB disconnect:", error)
        }
    }
}

export = DatabaseServer