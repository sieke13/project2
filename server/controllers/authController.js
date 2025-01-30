import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js'; 

// Register new user
export const register = async (req, res) => {
  try {
    console.log("🔍 Incoming registration request:", req.body);

    const { email, password } = req.body;

    if (!email || !password) {
      console.log("❌ Missing email or password!");
      return res.status(400).json({ message: "Email and password are required" });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      console.log("❌ Email already in use:", email);
      return res.status(400).json({ message: "Email already in use" });
    }

    console.log("🔑 Hashing password...");
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("✅ Password hashed successfully!");

    const newUser = await User.create({ email, password: hashedPassword });
    console.log("✅ User created successfully:", newUser.email);

    res.status(201).json({ message: "User registered successfully" });

  } catch (error) {
    console.error("❌ Registration error:", error);
    res.status(500).json({ message: "Error registering user" });
  }
};


// ✅ User Login (POST /api/auth/login)
export const login = async (req, res) => {
  try {
    console.log("🔍 Incoming login request:", req.body);

    const { email, password } = req.body;

    // ✅ Find user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      console.log("❌ User not found:", email);
      return res.status(401).json({ message: 'User not found' });
    }

    console.log("✅ User found, verifying password...");

    // ✅ Compare hashed password with input
    const passwordIsValid = await bcrypt.compare(password, user.password);
    console.log("🔑 Password match:", passwordIsValid);

    if (!passwordIsValid) {
      console.log("❌ Invalid password!");
      return res.status(401).json({ message: 'Invalid password' });
    }

    // ✅ Generate JWT
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

    console.log("✅ Login successful! Token generated.");

    res.json({ token, user: { id: user.id, email } });
  } catch (error) {
    console.error("❌ Login error:", error);
    res.status(500).json({ message: 'Server error' });
  }
};

