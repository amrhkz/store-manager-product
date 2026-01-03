import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Validation
    if (!email || !password) {
      return res.status(400).json({
        message: "ایمیل و رمز عبور الزامی است",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "رمز عبور باید حداقل ۶ کاراکتر باشد",
      });
    }

    // 2. Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "کاربری با این ایمیل قبلاً ثبت‌نام کرده",
      });
    }

    // 3. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Create user
    await User.create({
      email,
      password: hashedPassword,
    });

    // 5. Response
    res.status(201).json({
      message: "ثبت‌نام با موفقیت انجام شد",
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({
      message: "خطای سرور",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Validation
    if (!email || !password) {
      return res.status(400).json({
        message: "ایمیل و رمز عبور الزامی است",
      });
    }

    // 2. Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "ایمیل یا رمز عبور اشتباه است",
      });
    }

    // 3. Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "ایمیل یا رمز عبور اشتباه است",
      });
    }

    // 4. Create token
    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // 5. Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false, // در production: true
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 روز
    });

    // 6. Response
    res.json({
      message: "ورود با موفقیت انجام شد",
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      message: "خطای سرور",
    });
  }
};

export const getMe = async (req, res) => {
  try {
    res.json({
      user: req.user,
    });
  } catch (error) {
    res.status(500).json({
      message: "خطای سرور",
    });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "lax",
      secure: false, // در production true
    });

    res.json({
      message: "با موفقیت خارج شدید",
    });
  } catch (error) {
    res.status(500).json({
      message: "خطای سرور",
    });
  }
};
