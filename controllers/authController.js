import User from "../models/userModels.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register
export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      email,
      password: hashedPassword
    });

    await user.save();

    res.status(201).json({
      message: "User registered successfully"
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login
export const loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user)
      return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful",
      token
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Protected Route
export const getUser = (req, res) => {

  res.json({
    message: "Protected route accessed",
    user: req.user
  });

};