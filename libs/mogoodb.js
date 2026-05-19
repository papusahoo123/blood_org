// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URL) 
  
//     console.log("MongoDB connected successfully");
//   }
//   catch (error) {
//     console.error("MongoDB connection error:", error);
//     process.exit(1); // Exit the process with an error code
//   }     
// };

// export default connectDB;


// //api lib model







import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};

export default connectDB;