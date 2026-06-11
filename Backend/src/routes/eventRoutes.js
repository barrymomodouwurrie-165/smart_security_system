import express from "express";
import Event from "../models/events.js";

const eRouter = express.Router();

eRouter.post("/", async (req, res) => {
  const { message, type } = req.body;
  try {
    const event = new Event({ message, type, date: new Date() });
    await event.save();
    res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ message: "Internal Error", error });
  }
});

eRouter.get("/", async (req, res) => {
  try {
    const events = await Event.find().sort({ date: -1 }).limit(5);
    if (!events)
      return res.status(400).json({ Message: "Failed to get  events" });
    return res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Internal Error", error });
  }
});

export default eRouter;
