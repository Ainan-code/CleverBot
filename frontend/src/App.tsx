


import './App.css';
import Header from './components/Header';

import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Chat from './pages/Chat';
import NotFound from './pages/NotFound';
import { useAuth } from './context/AuthContext';


function App() {
 const auth = useAuth();

  return (
    <>
      <main>
         <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={auth?.user ? <Chat/> : <Signup/>} />
        <Route path="/login" element={ auth?.user ? <Chat/> : <Login/>} />
        <Route path="/chat" element= { auth?.user ?  <Chat/> : <Login/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>

      </main>
        
    </>
  )
}

export default App
