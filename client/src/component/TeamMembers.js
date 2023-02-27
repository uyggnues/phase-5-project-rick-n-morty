import React from 'react'
import TeamMember from './TeamMember';


const TeamMembers = ({cha}) => {

    // console.log(cha)


    const mappedTeamMembers = cha.map( m => <TeamMember key={m.id} m={m}/>)

    return (
        <div className='team_making_field'>
            {mappedTeamMembers}
        </div>
    );
}

export default TeamMembers;
