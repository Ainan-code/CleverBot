import axios from "axios";

  export const loginUser = async (email: string, password: string) => {
        

    const res = await axios.post("/user/login", {
      email, password
      });
      if(res.status !== 200) {
        throw new Error("Login Failed");

      }
      const data =  await res.data;


      return data;
  };


  export const checkAuthStatus = async () => {
        

    const res = await axios.get("/user/auth-status" );
      if(res.status !== 200) {
        throw new Error("no authenticated user");

      }
      const data =  await res.data;


      return data;
  };

  export const sendChatRequest = async (message : string) => {
        

    const res = await axios.post("/chat/new",  {message});
      if(res.status !== 200) {
        throw new Error("chat request failed");

      }
      const data =  await res.data;


      return data;
  };