import express from "express";
import Code from "./models/pinModel.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/", async (req, res) => {
  const { pin } = req.body;
  if (!/^\d{6}$/.test(pin)) {
    return res.status(400).json({ message: "PIN must be exactly 6 digits" });
  }
  try {
    const hashPin = await bcrypt.hash(pin, 10);
    const newPin = new Code({ pin: hashPin });
    await newPin.save();
    res.status(201).json({ Message: "Pin created successfully", newPin });
  } catch (err) {
    res.status(500).json({ message: "Internal error", err: err.message });
  }
});

router.post("/login", async (req, res) => {
  const { pin } = req.body;
  try {
    const user = await Code.findOne();
    console.log({ "entered pin": pin });
    console.log({ "saved pin": user.pin });
    if (!user) {
      return res.status(400).json({ Message: "User not found" });
    }
    const isMatch = await bcrypt.compare(pin, user.pin);
    if (!isMatch) {
      return res.status(400).json({ Message: "Incorrect Pin" });
    }
    return res.status(200).json({ Message: "User logged in successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal error", error: error.message });
  }
});

export default router;
