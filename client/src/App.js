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
import Episodes from './component/Episodes';
import EpisodeProfile from './component/EpisodeProfile';
import MyTeams from './component/MyTeams';
import UpdateTeam from './component/UpdateTeam';
import Battle from './component/Battle';
import Battleground from './component/Battleground';

function App() {
  const {fetchCurrentUser, user, setUser} = useContext(UserContext)

  useEffect(() => {
    fetchCurrentUser()
    // .then()
  },[])

  // console.log(user)


  if(!user) return (
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Welcome/>}/>
    </Routes>
  )
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/characters/:character_id' element={<CharacterProfile />}/>
      <Route path='/episode/:episode_id' element={<EpisodeProfile />}/>
      <Route path='/update_teams/:team_id' element={<UpdateTeam />}/>
      <Route path='/update_profile' element={<UpdateProfile />}/>
      <Route path='/battleground' element={<Battleground />}/>
      <Route path='/characters' element={<Characters />}/>
      <Route path='/make_teams' element={<MakeTeams />}/>
      <Route path='/episodes' element={<Episodes />}/>
      <Route path='/my_teams' element={<MyTeams />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/battle' element={<Battle />}/>
      <Route path='/teams' element={<Teams />}/>
      <Route path='/' element={<Welcome />}/>
    </Routes>
    </>
  );
}

export default App;
