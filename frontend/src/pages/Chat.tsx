 import { Box, Avatar, Typography, Button, IconButton} from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { red } from "@mui/material/colors";
import ChatItem from "../components/chats/ChatItem";
import { IoMdSend } from "react-icons/io";
import { useRef, useState } from "react";

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
    }

  
      
    

    const auth = useAuth();
    return (
      <Box sx={{display: "flex", flex: 1, width: "100%", height: "100%", mt: 3, gap: 3}}
      >

     <Box sx={{display:{ md: "flex", sm: "none", xs: "none"}, flex: 0.2, flexDirection: "column" }}    >

      <Box sx={{display: "flex", width: "100%", height: "60vh", bgcolor: "#52414C", borderRadius: 5, flexDirection: "column"
       , mx:3
      }} >

        <Avatar sx={{mx: "auto", my: 2, bgcolor: "white", color: "black", 

        }}>{auth?.user?.name[0]} {auth?.user?.name.split(" ")[1][0]} </Avatar>

        <Typography sx={{mt: "auto"}}
        >
         Minimalist Chatbot:
        </Typography>
        <Typography sx={{mt: "auto",  my: 4, p:3}}
        >
         You can ask questions related to sustainable living and how to reduce your carbon footprint. 
        </Typography>
        <Button sx={{width: "200px", my: "auto", color: "white", fontWeight: 700, mx: "auto",
          
          bgcolor: red[300], ":hover": {
            bgcolor: red.A400
          }
        }}
        >
          Clear Conversation
        </Button>
      </Box>
   </Box>
    <Box sx={{display: "flex", flex: {md: 0.8, xs: 1, sm: 1}, flexDirection: "column", px: 2  }}>

    <Typography sx={{textAlign: "center", fontSize: "40px", color: "white", mb: 2, mx: "auto"}}>Model GPT 3.5 Turbo</Typography>
    <Box sx={{width: "100%", height: "60vh", borderRadius: 3, mx: "auto", display: "flex", 
     flexDirection: "column", overflow: "scroll", overflowX: "hidden",overflowY: "auto", scrollBehavior: "smooth"
    }}
     >
      {chatMessages.map((chat) =>  <ChatItem  content={chat.content} role={chat.role} />  )}
     </Box>
     <div style={{width: "100%", padding: "20px", borderRadius: 8, backgroundColor: "#596157", display: "flex", marginRight: "auto"}}>
      {" "} 
     <input ref={inputRef}
     type="text" style={{width: "100%", backgroundColor: "transparent", padding: "10px", border: "none", 
     outline: "none", color: "white", fontSize: "20px"
     }} />
      <IconButton onClick={handleSubmit}  sx={{mx: 1, color: "white", }}> <IoMdSend /> </IconButton>
     </div>
     
   </Box>

      </Box>
    )
  }
  
  export default Chat;