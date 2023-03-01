import React, { useState, useEffect, useContext } from 'react'
import TM from './TM';
import { UserContext } from '../Context/UserContext';
import { TeamContext } from '../Context/TeamContext';

const Team = ({t}) => {
  const {user} = useContext(UserContext)
  const {fav} = useContext(TeamContext)
  const heartItem = user.fav_teams.find(team => team.team_id === t.id) ? '💚' : '🖤'
  const [heart, setHeart] = useState(heartItem)
  const [favorite, setFavorite] = useState({
      user_id: user.id,
      team_id: t.id
  })
    console.log(t)
    const mappedTeamMembers = t.team_members.map( tm => <TM key={tm.id} tm={tm} t={t}/>)

    return (
        <div className='team_outline'>
          <p className='teamName'>{t.name}</p>
          <div className='team'>
            <div className='team_'>
              {mappedTeamMembers}
            </div>
          {user.id !== t.user.id ?<button className='team_like_btn' onClick={() => fav(heart, setHeart, favorite, t)}>{heart}</button>
          :
          null}
          </div>
        </div>
    );
}

export default Team;
