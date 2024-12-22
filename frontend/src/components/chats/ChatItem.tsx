 

 import { Avatar, Box, Typography } from '@mui/material'
import { useAuth } from '../../context/AuthContext';
import { Prism } from 'react-syntax-highlighter';
import { coldarkCold } from 'react-syntax-highlighter/dist/esm/styles/prism';


 
 const ChatItem = ({content, role}: {content: string, role: string}) => {

      function extractCodeBlock(message: string) {
          if (message.includes("```")) {
            const blocks = message.split("```");
            return blocks;
          }
        }
    
        function isCodeblock(str: string) {
       if (        str.includes("=") ||
       str.includes(";") ||
       str.includes("[") ||
       str.includes("]") ||
       str.includes("{") ||
       str.includes("}") ||
       str.includes("#") ||
       str.includes("//")
      )  {
    return true
    }
      return false  };
    
 const messageblocks = extractCodeBlock(content);

 const auth = useAuth();

   return role === "assistant" ? (<Box sx={{display: "flex", p: 2, bgcolor: "#5B8C5A" ,borderRadius: 2, my: 1, gap: 2}}
   >
    <Avatar sx={{ml: "0"}}>
        <img src="loginpic.jpg" alt="assitant" width={"30px"} />
    </Avatar>
    <Box> 
    {!messageblocks && (<Typography fontSize={"16px"}> {content} </Typography>) }

    {messageblocks && messageblocks.length > 0 && messageblocks.map((block) => 
    isCodeblock(block) ?  (<Prism style={coldarkCold} language="javascript">{block}</Prism>) : 
    (<Typography fontSize={"16px"}> {block} </Typography>))}
    
        
    </Box>
         
   </Box>  ): 
   (<Box sx={{display: "flex", p: 2, bgcolor: "#596157" , borderRadius: 2, gap: 2}}
   >
    <Avatar sx={{ml: "0", bgcolor: "black", color: "white"}}>
    {auth?.user?.name[0]} {auth?.user?.name.split(" ")[1][0]}
    </Avatar>
    <Box> 
        <Typography fontSize={"16px"}> {content} </Typography>
    </Box>
         
   </Box>  )

 }
 
 export default ChatItem;