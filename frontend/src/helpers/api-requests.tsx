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

  export const signupUser = async (formData: any) => {
        

    const res = await axios.post("/user/signup", {
      formData
      });
      if(res.status !== 200) {
        throw new Error("signup Failed");

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


  export const getAllchats = async () => {
        

    const res = await axios.get("/chat/");
      if(res.status !== 200) {
        throw new Error("chat request failed");

      }
      const data =  await res.data;


      return data;
  };

  export const deleteUserChat = async () => {
        

    const res = await axios.delete("/chat/");
      if(res.status !== 200) {
        throw new Error("chat request failed");

      }
      const data =  await res.data;


      return data;
  };

  export const LogoutUser = async () => {
        

    const res = await axios.post("/user/logout");
      if(res.status !== 200) {
        throw new Error("user logout failed");

      }
      const data =  await res.data;


      return data;
  };




