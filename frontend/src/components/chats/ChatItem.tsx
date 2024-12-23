 

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

   return role === "assistant" ? (<Box sx={{display: "flex", p: 2, bgcolor: "#F1F1F1" ,borderRadius: 2, my: 1, gap: 2, }}
   >
    <Avatar sx={{ml: "0"}}>
        <img src="loginpic.jpg" alt="assitant" width={"30px"} />
    </Avatar>
    <Box> 
    {!messageblocks && (<Typography fontSize={"16px"} color='#333333'> {content} </Typography>) }

    {messageblocks && messageblocks.length > 0 && messageblocks.map((block) => 
    isCodeblock(block) ?  (<Prism  style={coldarkCold} language="javascript">{block}</Prism>) : 
    (<Typography fontSize={"16px"} color='#333333'> {block} </Typography>))}
    
        
    </Box>
         
   </Box>  ): 
   (<Box sx={{display: "flex", p: 2, bgcolor: "#B0B0B0" , borderRadius: 2, gap: 2}}
   >
    <Avatar sx={{ml: "0", bgcolor: "black", color: "white"}}>
    {auth?.user?.fullName[0]} {auth?.user?.fullName.split(" ")[1][0]}
    </Avatar>
    <Box>
        {!messageblocks && (
          <Typography sx={{ fontSize: "20px" }}>{content}</Typography>
        )}
        {messageblocks &&
          messageblocks.length &&
          messageblocks.map((block) =>
            isCodeblock(block) ? (
              <Prism style={coldarkCold} language="javascript">
                {block}
              </Prism>
            ) : (
              <Typography sx={{ fontSize: "16px" }}>{block}</Typography>
            )
          )}
      </Box>
         
   </Box>  )

 }
 
 export default ChatItem;