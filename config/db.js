import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `MongoDB connected on host: ${connect.connection.host}`.green.underline
        .bold
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectDB;
