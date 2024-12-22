import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";

import { GeminiResponse } from "../config/openai-config.js";



export const generateChatCompletion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { message } = req.body;
  try {
    const user = await User.findById(res.locals.jwtData.id);
    if (!user)
      return res
        .status(401)
        .json({ message: "User not registered OR Token malfunctioned" });
    // grab chats of user
    const chats = user.chats.map(({ role, content }) => ({
      role,
      content,
    }));
    user.chats.push({ content: message, role: "user" });
    chats.push({ content: message, role: "user" });
    

    // send all chats with new one to openAI API

   
 
   
   
   
   const result = await GeminiResponse(message);
   
   user.chats.push({ content: result, role: "assistant" });
    await user.save();
    return res.status(200).json({ chats: user.chats });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};


export const getAllChats = async (
  req: Request,
  res: Response,
  next: NextFunction
) => { 
  try {
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
     return res.status(404).json({ message: "User not found" });
    }
 
    return res.status(200).json({chats: user.chats});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


export const deleteChats = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
      try {
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
         return res.status(404).json({ message: "User not found" });
        }
        //@ts-ignore
        user.chats = [];
        await user.save();

       return  res.status(200).json({ message: "Chats deleted successfully" });


      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
      } 
 }