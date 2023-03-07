import React, { useContext, useEffect } from 'react';
import { UserContext } from '../Context/UserContext';
import { TeamContext } from '../Context/TeamContext';
import MyTeam from './MyTeam';

const MyTeams = () => {
    const { user } = useContext(UserContext)
    const { fetchUserTeam, userTeams } = useContext(TeamContext)

    useEffect(() => {
        fetchUserTeam(user)
    }, [])
    // console.log(userTeams)
    // debugger

    const mappedUserTeams = userTeams ? userTeams.map( ut => 
        <MyTeam key={ut.id} ut={ut}/>
        ) : null

    return (
        <div>
            {mappedUserTeams}
        </div>

    );
}

export default MyTeams;
