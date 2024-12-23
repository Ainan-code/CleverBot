 import { Box, Avatar, Typography, Button, IconButton} from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { red } from "@mui/material/colors";
import ChatItem from "../components/chats/ChatItem";
import { IoMdSend } from "react-icons/io";
import { useEffect,  useRef, useState } from "react";
import { deleteUserChat, getAllchats, sendChatRequest } from "../helpers/api-requests";

type Message = {
  role: "user" | "assistant";
  content: string;
}
  const Chat = () => {

  

    const inputRef = useRef<HTMLInputElement | null>(null);

    const [chatMessages, setChatMessages] = useState<Message[]>([]);

    const handleSubmit = async() => {

      const content = inputRef.current?.value;

      if (inputRef && inputRef.current) {
        inputRef.current.value = "";
      }

      const newMessage: Message = {role: "user" ,  content: content  as string };

      setChatMessages((prev) => [...prev, newMessage]);

      const chatData = await sendChatRequest(content as string);

      setChatMessages([...chatData.chats]);
    }

    const auth = useAuth();

    const handleDelete = async() => {
      try {
      await  deleteUserChat();
      setChatMessages([]);

      } catch (error) {
       console.log(error);
      }
    }
      
    useEffect(() => {
      if( auth?.user)
      getAllchats().then((data) => {
        setChatMessages([...data.chats]);
      }).catch((error) => {
        console.log(error);
      })
    }, [auth]);

  
    return (
      <Box sx={{display: "flex", flex: 1, width: "100%", height: "100%", mt: 3, gap: 3}}
      >

     <Box sx={{display:{ md: "flex", sm: "none", xs: "none"}, flex: 0.2, flexDirection: "column" }}    >

      <Box sx={{display: "flex", width: "100%", height: "60vh", bgcolor: "#6C9EAD", borderRadius: 5, flexDirection: "column"
       , mx:3
      }} >

        <Avatar sx={{mx: "auto", my: 2, bgcolor: "white", color: "black", fontWeight: 700

        }}>{auth?.user?.fullName[0]} {auth?.user?.fullName.split(" ")[1][0]} </Avatar>

        <Typography sx={{mx: "auto"}}
        >
         Minimalist Chatbot:
        </Typography>
        <Typography sx={{mx: "auto",  my: 4, p:3}}
        >
         You can ask questions related to sustainable living and how to reduce your carbon footprint. 
        </Typography>
        <Button sx={{width: "200px", my: "auto", color: "white", fontWeight: 700, mx: "auto", borderRadius: 3,
          
          bgcolor: red[300], ":hover": {
            bgcolor: red.A400
          }  
        }} onClick={handleDelete}
        >
          Clear Conversation
        </Button>
      </Box>
   </Box>
    <Box sx={{display: "flex", flex: {md: 0.8, xs: 1, sm: 1}, flexDirection: "column", px: 3  }}>

    <Typography sx={{fontSize: "40px",
            color: "white",
            mb: 2,
            mx: "auto",
            fontWeight: "600"}}>GEMINI 1.5  </Typography>

    <Box sx={{ maxHeight: "60vh", borderRadius: 3, mx: "auto", display: "flex", 
     flexDirection: "column", overflow: "scroll",overflowY: "auto",overflowX: "hidden" ,scrollBehavior: "smooth"
    }}
     >
      {chatMessages.map((chat,index) =>  <ChatItem  content={chat.content} role={chat.role} key={index}/>  )}
     </Box>
     <div style={{width: "100%",  borderRadius: 8, backgroundColor: "#B0B0B0", display: "flex", margin: "auto"}}>
      {" "} 
     <input ref={inputRef}
     type="text" style={{width: "100%", backgroundColor: "transparent", padding: "15px", border: "none", 
     outline: "none", color: "#333333", fontSize: "20px"
     }} />
      <IconButton onClick={handleSubmit}  sx={{mx: 1, color: "white", }}> <IoMdSend /> </IconButton>
     </div>
     
   </Box>

      </Box>
    )
  }
  
  export default Chat;