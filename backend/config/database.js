import mongoose from "mongoose";

export const connectDatabase = async () => {
    try {
        let c = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongodb connected to: ${c.connection.host}`);
    } catch (error) {
        console.log(error.message);
    }
}