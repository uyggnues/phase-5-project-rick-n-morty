import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../Context/UserContext';
import BattleTeamMembers from './BattleTeamMembers';

const Battle = () => {

    const { user } = useContext(UserContext)
    // console.log(user)

    const mappedUserTeam = user.teams.map( t => 
        <div key={t.id} className='battle_info_text'>
            <p>{t.name}</p>
            <div>
                <BattleTeamMembers user={user} />
            </div>
        </div>
        )

    return (
        <div className='battle'>
            <div className='battle_title'>Choose your team</div>
            <div className='battle_team'>
                <button className='previous_btn'>{'<'}</button>
                <div className='battle_team_info'>
                    {mappedUserTeam}
                </div>
                <button className='next_btn'>{'>'}</button>
            </div>
        </div>
    );
}

export default Battle;
