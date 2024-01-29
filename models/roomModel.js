import mongoose from "mongoose";

const Schema = mongoose.Schema;

const roomSchema = new Schema(
  {
    name: { type: String, required: true },
    map: { type: Array, required: true },
  },
  { timestamps: true }
);

const Room = mongoose.model("Room", roomSchema);

export default Room;
