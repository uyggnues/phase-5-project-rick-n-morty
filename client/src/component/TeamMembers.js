import React from 'react'
import TeamMember from './TeamMember';


const TeamMembers = ({cha, handleDrag}) => {

    console.log(cha)


    const mappedTeamMembers = cha && cha.map( m => <TeamMember key={m.id} m={m} handleDrag={handleDrag}/>)

    return (
        <div className='team_making_field'>
            {mappedTeamMembers}
        </div>
    );
}

export default TeamMembers;
