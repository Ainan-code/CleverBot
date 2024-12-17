import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import { configureOpenAI } from "../config/openai-config.js";
import { OpenAIApi } from "openai";


export const generateChatCompletion = async (req:Request, res: Response, next: NextFunction) => {
      try {
        const {message} = req.body;

        const user = await User.findById(res.locals.jwtData.id);

        if(!user) {
            return res.status(404).json({message: "User not found"});
        };
        /// fetch all the user messages and add the new messages
        const chats = user.chats.map(({role, content})  => ({role, content}));
        chats.push({role: "user", content: message});
        user.chats.push({role: "user", content: message});


        const config = configureOpenAI();

        const openai = new OpenAIApi(config);

        const chatResponse = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: chats,
            
        })

      } catch (error) {
        
      }
}