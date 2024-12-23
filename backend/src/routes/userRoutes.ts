 import {Router} from "express";
import { getAllUsers, Login, Logout, Signup, VerifyUser } from "../controllers/userController.js";
import { loginValidations, SignupValidations, validate } from "../utils/validations.js";
import { verifyToken } from "../utils/generateToken.js";

 const userRoutes = Router();

userRoutes.get("/", getAllUsers);

userRoutes.get("/auth-status", verifyToken ,VerifyUser);

userRoutes.post("/signup", validate(SignupValidations), Signup);

userRoutes.post("/login",validate(loginValidations), Login);

userRoutes.post("/logout", verifyToken ,Logout);









 export default userRoutes;