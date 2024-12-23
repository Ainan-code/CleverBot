import {Box, Button, Typography} from '@mui/material';
  import { IoIosLogIn } from 'react-icons/io';
  import CustomizedInput from '../components/shared/CustomizedInput';
  import { useAuth } from '../context/AuthContext';
  import {toast} from 'react-hot-toast';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
  
  
   
   const Signup = () => {

    const [inputs, setInputs] = useState({
      fullName: "",
      email: "",
      password: "",
    });
  
    const auth = useAuth();

    const navigate = useNavigate();
    
  
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       
       
        try {
           
            await auth?.signup(inputs.fullName, inputs.email, inputs.password);
            toast.success("signup successful", {id: "signup"});
            navigate("/login");
        } catch (error) {
          console.log(error);
          toast.error("signup failed", {id: "signup"});
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
  
          <form onSubmit={handleSubmit}
          style={{margin: "auto", padding: "30px", boxShadow: "10px 10px 20px #000", borderRadius: "10px", border: "none"}}>
  
             <Box  sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}
             >
              <Typography variant='h4' textAlign={'center'} padding={"3"} fontWeight={600}>Signup</Typography>
              <CustomizedInput type="text" name="FullName" label="FullName" onChange={(e) => setInputs({...inputs, fullName: e.target.value})} value={inputs.fullName}/>
             <CustomizedInput type="email" name="Email" label="Email" onChange={(e) => setInputs({...inputs, email: e.target.value})} value={inputs.email}/>
             <CustomizedInput type="password" name="password" label="Password"  onChange={(e) => setInputs({...inputs, password: e.target.value})} value={inputs.password}/>
              <Button variant="contained" color="success" type="submit" sx={{px:2, py: 2, mt:2 , 
                width: "400px", borderRadius: 2, bgcolor: "#4BA3FB", ":hover": { bgcolor: "white", color: "black"}
                }}  endIcon={<IoIosLogIn />}
              >Sign up</Button>
             </Box>
  
          </form>
  
       </Box>
  
       </Box>
     )
   }
   
   export default Signup;