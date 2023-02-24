import './App.css';
import {useEffect, useState, useContext } from 'react'
import Login from './component/Login';
import { UserContext } from './Context/UserContext';
import Navbar from './component/Navbar';
import {Routes, Route} from 'react-router-dom'
import Welcome from './component/Welcome';
import Signup from './component/Signup'
import Profile from './component/Profile'
import Characters from './component/Characters'

function App() {
  const {fetchCurrentUser, user, setUser} = useContext(UserContext)

  useEffect(() => {
    fetchCurrentUser()
    // .then()
  },[])

  if(!user) return (
    <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
  )

  

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/characters' element={<Characters />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/' element={<Welcome />}/>
    </Routes>
    </>
  );
}

export default App;
