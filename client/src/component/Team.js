import React from 'react';
import TM from './TM';

const Team = ({t}) => {

    // console.log(t.team_members)
    const mappedTeamMembers = t.team_members.map( tm => <TM key={tm.id} tm={tm} />)

    return (
        <div className='team_outline'>
          <p className='teamName'>{t.name}</p>
          <div className='team'>{mappedTeamMembers}</div>
        </div>
    );
}

export default Team;
