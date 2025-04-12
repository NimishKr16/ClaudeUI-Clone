import './App.css'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import { useEffect, useState } from 'react';
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';
function App() {
  const { isAuthenticated } = useContext(AuthContext);
  console.log("isAuth: ",isAuthenticated);
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
       <Router>
       <Routes>
       <Route path="/login" element={<LoginPage />} />
       <Route
            path="/"
            element={
              isAuthenticated ? (
                <>
                  <Sidebar />
                  <Chat />
                </>
              ) : (
                // <Navigate to="/login" />
                <h1>PLEASE LOGIN BRO</h1>
              )
            }
          />
    
       </Routes>
       </Router>
    </GoogleOAuthProvider>
  )
}

export default App
