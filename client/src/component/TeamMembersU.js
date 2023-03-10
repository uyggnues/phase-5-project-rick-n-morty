import React from 'react'
import TeamMemberU from './TeamMemberU';


const TeamMembersU = ({cha, handleDrag}) => {

    // console.log(cha)


    const mappedTeamMembers = cha && cha.slice(0,5).map( m => <TeamMemberU key={m.id} m={m} handleDrag={handleDrag}/>)

    return (
        <div className='team_making_field'>
            {mappedTeamMembers}
        </div>
    );
}

export default TeamMembersU;