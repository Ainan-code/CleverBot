import { Box,useMediaQuery, useTheme } from "@mui/material";
import TypeAnim from "../components/typer/TypeAnim";

 
  
  const Home = () => {

    const theme = useTheme();
   const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
    return (
      <Box sx={{width: "100%:", height: "100%", flex: "flex", mx: "auto", }}>
         <Box sx={{display: "flex", width: "100%", flexDirection: "column", alignItems: "center", justifyContent: "center", mx: "auto"}}>

          <Box>
            <TypeAnim/>
          </Box>
          <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { md: "row", xs: "column", sm: "column" },
            gap: 5,
            my: 10,
          }}
        >
          <img
            src="ai2.jpg"
            alt="robot"
            style={{ width: "200px", margin: "auto" }}
          />
          <img
            className="image-inverted rotate"
            src="ai.jpg"
            alt="openai"
            style={{ width: "200px", margin: "auto" }}
          />
        </Box>
        <Box sx={{ display: "flex", mx: "auto" }}>
          <img
            src="ai3.jpg"
            alt="chatbot"
            style={{
              display: "flex",
              margin: "auto",
              width: isBelowMd ? "60%" : "40%",
              borderRadius: 20,
              boxShadow: "-5px -5px 105px #64f3d5",
              marginTop: 20,
              marginBottom: 20,
              padding: 10,
            }}
          />
        </Box>
         </Box>

      </Box>
    )
  }
  
  export default Home; 