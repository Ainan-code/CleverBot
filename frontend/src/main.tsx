import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import { createTheme, ThemeProvider} from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.tsx';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000/api/v1";
axios.defaults.withCredentials = true;



const theme = createTheme({
    typography:{
      fontFamily:"Raleway, sans-serif",
      allVariants:{   color: "white"}
    }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
     <BrowserRouter>
    <ThemeProvider theme={theme}>
     <Toaster/> 
    <App />
    </ThemeProvider>
    </BrowserRouter> 
    </AuthProvider>
  </StrictMode>,
)
