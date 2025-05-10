import mongoose from "mongoose";

const connectDB = async () => {
  const uri = process.env.MONGO_URI || "mongodb://localhost:27017/backendIII";
  await mongoose.connect(uri);
};

export default connectDB;
