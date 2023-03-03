import React, { useContext, useEffect } from 'react';
import { TeamContext } from '../Context/TeamContext';
import MyTeamMembers from './MyTeamMembers';

const MyTeam = ({ut}) => {

    console.log(ut)

    const mappedUt = ut.team_members.map( utm => <MyTeamMembers key={utm.id} utm={utm}/>)

    return (
        <div className='team_outline'>
          <p className='teamName'>{ut.name}</p>
          <div className='team'>
            <div className='team_'>
              {mappedUt}
            </div>
            <div className='team_btn'>
                <button className='team-btn'>Update</button>
                <button className='team-btn'>delete</button>
            </div>
          </div>
        </div>
    );
}

export default MyTeam;
