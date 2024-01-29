import express from "express";
import Course from "../models/courseModel.js";
import Room from "../models/roomModel.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    console.log("Before fetching courses");
    const response = await Room.find({});
    console.log("After fetching courses");
    const rooms = response.map((room) => ({ name: room.name, map: room.map }));
    res.json({ rooms });
    next();
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
    throw new Error("DB Fetching error");
  }
});

export default router;
