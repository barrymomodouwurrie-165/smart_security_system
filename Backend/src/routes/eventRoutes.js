import express from "express";
import Event from "../models/events.js";
import {
  countIncrementAlert,
  getCountAlert,
} from "../utiles/countEventsIncrement.js";

const eRouter = express.Router();

eRouter.post("/", async (req, res) => {
  const { message, type } = req.body;
  try {
    const event = new Event({ message, type, date: new Date() });
    await event.save();
    const count = await countIncrementAlert();
    res.status(201).json({ success: true, count });
  } catch (error) {
    res.status(500).json({ message: "Internal Error", error });
  }
});

eRouter.get("/", async (req, res) => {
  try {
    const events = await Event.find().sort({ date: -1 }).limit(4);
    if (!events)
      return res.status(400).json({ Message: "Failed to get  events" });
    return res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Internal Error", error });
  }
});

eRouter.get("/count", async (req, res) => {
  const count = await getCountAlert();
  res.status(200).json({ count });
});

export default eRouter;
