   import { Link } from "react-router-dom";
   import { Typography } from "@mui/material";
   
   const Logo = () => {
     return (
       <div style={{display: "flex", marginRight: "auto", alignItems: "center", gap: "5px"}}>

        <Link to={"/"} >
        <img src="logo.jpg" alt="mindful living" width={"30px"} height={"30px"} className="image-inverted" />
        
        </Link>
        <Typography sx={{display: {md: "block", xs: "none", sm: "none" }, mr: "auto", fontWeight: 800, textShadow: " 2pxp 2px 20px #000"}}>
            <span style={{fontSize: "20px"}}> ConsciousLeaf</span>
        </Typography>

       </div>
     )
   }
   
   export default Logo;