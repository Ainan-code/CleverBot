import {Router} from "express";
import { verifyToken } from "../utils/generateToken.js";
import { chatCompletionValidation, validate } from "../utils/validations.js";
import { deleteChats, generateChatCompletion, getAllChats } from "../controllers/chatController.js";


const chatRoutes = Router();


chatRoutes.post("/new",  validate(chatCompletionValidation), verifyToken,  generateChatCompletion);

chatRoutes.get("/",   verifyToken,  getAllChats);

chatRoutes.delete("/",   verifyToken, deleteChats);



export default chatRoutes;