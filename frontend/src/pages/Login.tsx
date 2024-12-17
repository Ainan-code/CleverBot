import {Box, Button, Typography} from '@mui/material';
import { IoIosLogIn } from 'react-icons/io';
import CustomizedInput from '../components/shared/CustomizedInput';
import { useAuth } from '../context/AuthContext';
import {toast} from 'react-hot-toast';


 
 const Login = () => {

  const auth = useAuth();
  

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email");
      const password = formData.get("password");
     
      try {
         toast.loading("Logging in...", {id: "login"});
          await auth?.login(email as string, password as string);
          toast.success("Login successful", {id: "login"});
      } catch (error) {
        console.log(error);
        toast.error("Login failed", {id: "login"});
      }
  }
   return (
     <Box width={"100%"} height={"100%"} display={"flex"} flex={"1"}  >
     <Box padding={8} mt={8} display={{md: "flex", sm: "none", xs: "none" }}>
       <img src="loginpic.jpg" alt="login"  style={{width: "400px"}}/>
     </Box>
     <Box display={"flex"}
        flex={{ xs: 1, md: 0.5 }}
        justifyContent={"center"}
        alignItems={"center"}
        padding={2}
        ml={"auto"}
        mt={16}> 

        <form onSubmit={(e) => handleSubmit(e)}
        style={{margin: "auto", padding: "30px", boxShadow: "10px 10px 20px #000", borderRadius: "10px", border: "none"}}>

           <Box  sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}
           >
            <Typography variant='h4' textAlign={'center'} padding={"3"} fontWeight={600}>Login</Typography>

            <CustomizedInput name="email" type="email" label="Email"/>
            <CustomizedInput name="password" type="password" label="Password"/>
            <Button variant="contained" color="success" type="submit" sx={{px:2, py: 2, mt:2 , 
              width: "400px", borderRadius: 2, bgcolor: "#4BA3FB", ":hover": { bgcolor: "white", color: "black"}
              }}  endIcon={<IoIosLogIn />}
            >Login</Button>
           </Box>

        </form>

     </Box>

     </Box>
   )
 }
 
 export default Login;