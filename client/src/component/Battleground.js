import React, { useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { TeamContext } from '../Context/TeamContext';
import { UserContext } from '../Context/UserContext';
import BattlegroundTeamMembers from './BattlegroundTeamMembers';

const Battleground = () => {
    const { userTeams } = useContext(TeamContext)
    const { user } = useContext(UserContext)
    const location = useLocation()
    const index = location.state.index
    console.log(index)

    const mappedUserTeams = userTeams.map( ut => 
        <div key={ut.id} className='battleground_info_text'>
                <BattlegroundTeamMembers user={user} t={ut} />
        </div>
    )
    return (
        <div className='battleground'>
            <div>{mappedUserTeams[index]}</div>
        </div>
    );
}

export default Battleground;
