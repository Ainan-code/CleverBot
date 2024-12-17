 import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";


 
 
 export const generateToken = ( id:string) => {
   const payload = {id};

   const token = jwt.sign(payload, process.env.JWT_SECRET as string, {expiresIn: "7d"});

   return token;
 };
 

 export const verifyToken = (req: Request, res: Response, next: NextFunction) => {

  const token = req.signedCookies["auth-token"];
  if(!token || token.trim() === "")  {
    return res.status(401).json({message: "No token found"});
  }
     return new Promise<void>((resolve, reject) => {
         return jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
           if(err) {
             return res.status(401).json({message: "Unauthorized"});
           }
           else {
            resolve();
            res.locals.jwtData = decoded;
            return next();
           }


         })
     })
      
 }