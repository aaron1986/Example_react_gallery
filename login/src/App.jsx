import { useState } from 'react'
import './App.css'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogOutButton'
import Profile from './components/Profile'
import { useAuth0 } from "@auth0/auth0-react";


function App() {
 
  const {user, isAuthenticated, isLoading} = useAuth0();

  if(isLoading) {
    return <div>Loading...</div>
  }
  return (
    <>
    {isAuthenticated ? (
      <div>
        <Profile />
        <LogoutButton />
      </div>
    ) : (
      <LoginButton />
    )}
     <h1>Auth0 Demo</h1>
     <p>Wanna Login?</p>

    {user?.email === "aaronbrucesmith86@gmail.com" && ( <a href="https://tinyurl.com/4px9b9rb">Super Secret admin page</a>
)}

    </>
  )
}

export default App
