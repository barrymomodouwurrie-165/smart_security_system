import mongoose from "mongoose";

const PinSchema = new mongoose.Schema(
  {
    pin: {
      type: String,
      required: true,
    },
  },
  { createdAt: true },
);

const Code = mongoose.model("Code", PinSchema);

export default Code;
