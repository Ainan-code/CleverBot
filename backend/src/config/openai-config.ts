import { Configuration } from "openai";

export const configureOpenAI  = ()  => {
    const config = new Configuration({
        apiKey: process.env.OPENAI_KEY,
        organization: process.env.ORGANISATION_ID,


    })

    return config;
};