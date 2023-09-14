import mongoose from "mongoose";

const Schema = mongoose.Schema;

const courseSchema = new Schema(
  { course: { type: Object, required: true } },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);

export default Course;
