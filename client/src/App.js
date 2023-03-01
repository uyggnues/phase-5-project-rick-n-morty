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
import MakeTeams from './component/MakeTeams';
import CharacterProfile from './component/CharacterProfile';
import Teams from './component/Teams';
import UpdateProfile from './component/UpdateProfile';

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
      <Route path='/characters/:character_id' element={<CharacterProfile />}/>
      <Route path='/update_profile' element={<UpdateProfile />}/>
      <Route path='/characters' element={<Characters />}/>
      <Route path='/make_teams' element={<MakeTeams />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/teams' element={<Teams />}/>
      <Route path='/' element={<Welcome />}/>
    </Routes>
    </>
  );
}

export default App;
