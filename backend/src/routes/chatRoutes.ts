import {Router} from "express";
import { verifyToken } from "../utils/generateToken.js";
import { chatCompletionValidation } from "../utils/validations.js";
import { generateChatCompletion } from "../controllers/chatController.js";


const chatRoutes = Router();


chatRoutes.post("/new",chatCompletionValidation, verifyToken,  generateChatCompletion);





export default chatRoutes;