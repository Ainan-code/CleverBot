import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import { createTheme, ThemeProvider} from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

const theme = createTheme({
    typography:{
      fontFamily:"Raleway, sans-serif",
      allVariants:{   color: "white"}
    }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter> 
    <App />
    </BrowserRouter> 
    </ThemeProvider>
  </StrictMode>,
)
