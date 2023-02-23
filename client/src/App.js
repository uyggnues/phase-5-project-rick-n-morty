import './App.css';
import {useEffect, useState, useContext } from 'react'
import Login from './component/Login';
import { UserContext } from './Context/UserContext';
import Navbar from './component/Navbar';
import {Routes, Route} from 'react-router-dom'
import Welcome from './component/Welcome';

function App() {
  const {fetchCurrentUser, user, setUser} = useContext(UserContext)

  useEffect(() => {
    fetchCurrentUser()
    // .then()
  },[])

  if(!user) return (
    <>
    <Login/>
    </>
  )

  

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Welcome />}/>
    </Routes>
    </>
  );
}

export default App;
