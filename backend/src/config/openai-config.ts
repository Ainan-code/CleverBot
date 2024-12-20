import { GoogleGenerativeAI } from "@google/generative-ai";



export const GeminiResponse = async (prompt: string) => {

const genAI = new GoogleGenerativeAI(process.env.GoogleAi_API_KEY as string);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });



const result = await model.generateContent(prompt);

return result.response.text();
}

