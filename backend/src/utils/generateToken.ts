 import jwt from "jsonwebtoken";


 
 
 export const generateToken = ( id:string) => {
   const payload = {id};

   const token = jwt.sign(payload, process.env.JWT_SECRET as string, {expiresIn: "7d"});

   return token;
 };
 