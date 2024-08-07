import { Router } from "express";
import { getAllUsers, signup, login, verifyUser, userLogout } from "../controllers/userController.js";
import { loginValidator, signupValidator, validate } from "../utils/validator.js";
import { verifyToken } from "../utils/token-manager.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers); 
userRoutes.post("/signup", validate(signupValidator), signup);
userRoutes.post("/login", validate(loginValidator), login);
userRoutes.get("/auth-status", verifyToken, verifyUser)
userRoutes.get("/logout", verifyToken, userLogout);

export default userRoutes;