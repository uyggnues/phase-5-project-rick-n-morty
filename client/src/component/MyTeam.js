import React, { useContext, useEffect, useState } from 'react';
import { TeamContext } from '../Context/TeamContext';
import MyTeamMembers from './MyTeamMembers';
import { useNavigate } from 'react-router-dom'
// import { UserContext } from '../Context/UserContext';

const MyTeam = ({ut}) => {
  // console.log(ut)
    const navigate = useNavigate()
    const [tm, setTm] = useState(ut.team_members)
    const { deleteTeam } = useContext(TeamContext)
    // const { user } = useContext(UserContext)
    
    const mappedUt = tm.slice(0,5).length === 5 ? tm.slice(0,5).map( utm => <MyTeamMembers key={utm.id} utm={utm}/>) : null

    // console.log(tm)
  
    return (
        <div className='team_outline'>
          <p className='teamName'>{ut.name}</p>
          <div className='team'>
            <div className='team_'>
              {mappedUt}
            </div>
            <div className='team_btn'>
                <button className='team-btn' onClick={() => navigate(`/update_teams/${ut.id}`)}>Update</button>
                <button className='team-btn' onClick={() => deleteTeam(ut, setTm)}>delete</button>
            </div>
          </div>
        </div>
    );
}

export default MyTeam;
