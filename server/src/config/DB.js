import mongoose from "mongoose";


const ConnectDb = async () => {
  try {
    await mongoose.connect(`${process.env.DB_CONNECTION_STRING}${process.env.DB_NAME}`);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error Connecting Db", error);
    process.exit(1);
  }
};

export default ConnectDb;