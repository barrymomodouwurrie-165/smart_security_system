import express from "express";
import Code from "./models/pinModel.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const getPin = await Code.find();
    if (!getPin) {
      return res.status(404).json({ message: "No pin found" });
    }
    return res.status(200).json({ getPin });
  } catch (error) {
    res.status(500).json({ message: "Internal error", error: error.message });
  }
});

router.post("/create", async (req, res) => {
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

router.put("/update/:id", async (req, res) => {
  const { currentPin, newPin } = req.body;
  if (!/^\d{6}$/.test(currentPin) || !/^\d{6}$/.test(newPin)) {
    return res.status(400).json({ message: "PIN must be exactly 6 digits" });
  }
  try {
    const user = await Code.findOne();
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isMatched = await bcrypt.compare(currentPin, user.pin);
    if (!isMatched) {
      return res
        .status(400)
        .json({ message: "Your current PIN is wrong, Try again!" });
    }
    const hashedPin = await bcrypt.hash(newPin, 10);
    const updatedPin = await Code.findByIdAndUpdate(req.params.id, {
      pin: hashedPin,
    });     
    if (!updatedPin) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "Pin updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal error", error: error.message });
  }
});

export default router;
