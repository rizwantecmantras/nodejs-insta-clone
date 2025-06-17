import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userRepo from "../../user/repository/user.repository.js";
import { Error } from "mongoose";

class AuthService {
  async register({ username, email, password }) {
    // Check if user already exists
    const exsistingUser = await userRepo.findByEmail(email);

    if (exsistingUser) {
      throw new Error("User already exists");
    }

    // Hash the password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create the user
    const user = await userRepo.create({
      username,
      email,
      password: hashPassword,
    });

    // Generate JWT token
    return {
      message: "User registered successfully !",
      token: await this.generateToken(user),
    };
  }

  async login({ email, password }) {
    
    // Check if user exists
    const user = await userRepo.findByEmail(email);
    // If user does not exist, throw an errorsssssssss    
    if (!user) {
      throw new Error("Invalid email or password");
    }
    
    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid email or password");
    }
    // Generate JWT token
    return {
      message: "Login successful!",
      token: await this.generateToken(user),
    };
  }

  async generateToken(user) {
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    return token;
  }
}

export default new AuthService();
