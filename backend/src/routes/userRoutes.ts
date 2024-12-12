 import {Router} from "express";
import { getAllUsers, Login, Signup } from "../controllers/userController.js";
import { loginValidations, SignupValidations, validate } from "../utils/validations.js";

 const userRoutes = Router();

userRoutes.get("/", getAllUsers);

userRoutes.post("/signup",validate(SignupValidations), Signup);

userRoutes.post("/login",validate(loginValidations), Login);






 export default userRoutes;