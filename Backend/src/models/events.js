import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["ok", "warn", "danger"],
      default: "info",
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
);

const Event = mongoose.model("Event", eventSchema);

export default Event;
