import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import {hash, compare} from "bcrypt";
import { generateToken } from "../utils/generateToken.js";

  

  export const getAllUsers = async (req:Request, res: Response, next: NextFunction) => {
      try {
        const users = await User.find();

        return res.status(200).json({users});


      } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Something went wrong", error: error.message});
        
      }
  };


  export const Signup = async (req:Request, res: Response, next: NextFunction) => {
    try {

      const {name, email, password} = req.body;

      const hashedPassword = await hash(password,10);

      const user = new User({name, email, password: hashedPassword});
      
      await user.save();

      return res.status(200).json({message: "User Created Successfully", id: user._id});


    } catch (error) {
      console.log(error);
      return res.status(500).json({message: "Something went wrong", error: error.message});
      
    }
};

export const Login = async (req:Request, res: Response, next: NextFunction) => {
    try {
        const {email, password} = req.body;

           const user = await User.findOne({email});

           if(!user)  {
            return res.status(400).json({message: "User not found"});
           };

           const isPasswordValid = await compare(password, user.password);

            if(!isPasswordValid) {
              return res.status(400).json({message: "Invalid email or password"});

            }
            // genrate token
            const token = generateToken(user._id.toString());

           // set and clear cookie  

           res.clearCookie("auth-token", {path: "/", domain: "localhost", httpOnly: true, signed: true});


            const expires = new Date();
            expires.setDate(expires.getDate() + 7);
            res.cookie("auth-token", token, { path: "/", domain: "localhost", httpOnly: true,  expires, signed:true});

            return res.status(200).json({message: "Login successful", id: user._id});
    } catch (error) {
      console.log(error);
      return res.status(500).json({message: "something went wrong", error: error.message});

    }
};


