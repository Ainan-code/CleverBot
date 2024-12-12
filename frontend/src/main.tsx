import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import { createTheme } from '@mui/material';

const theme = createTheme({
    typography:{
      fontFamily:"Raleway, sans-serif",
      allVariants:{   color: "white"}
    }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
