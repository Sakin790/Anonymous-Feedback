import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};
const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log(`DB Already Connected`);
    return;
  }
  try {
    const DB = await mongoose.connect(process.env.MONGODB_URL || "", {});
    console.log(DB);
    connection.isConnected = DB.connections[0].readyState;
    console.log("Db Connected");
  } catch (error) {
    console.log("MongoDB Connection Failed", error);
    process.exit(1);
  }
}
