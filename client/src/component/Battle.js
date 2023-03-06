import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../Context/UserContext';
import BattleTeamMembers from './BattleTeamMembers';
import { TeamContext } from '../Context/TeamContext';
import { ImArrowRight, ImArrowLeft } from 'react-icons/im'
import { useNavigate } from 'react-router-dom';

const Battle = () => {
    const navigate = useNavigate()
    const { fetchUserTeam, userTeams } = useContext(TeamContext)
    const { user } = useContext(UserContext)
    const [ i, setI ] = useState(0)
    useEffect(() => {
        fetchUserTeam(user)
    },[])

    // console.log(userTeams)

    const mappedUserTeam = userTeams.map( t => 
        <div key={t.id} className='battle_info_text'>
            <p>{t.name}</p>
            <div>
                <BattleTeamMembers user={user} t={t} />
            </div>
        </div>
    )

    // const index = parseInt(i)

    const next = () => {
        if (i >= userTeams.length -1) {
            setI(0)
        } else {
            setI(current => current + 1)
        }
    }

    const previous = () => {
        if (i <= 0) {
            setI(userTeams.length - 1)
        } else {
            setI(current => current - 1)
        }
    }

    return (
        <div className='battle'>
            <div className='battle_title'>Choose your team</div>
            <div className='battle_team'>
                <button className='previous_btn' onClick={() => previous()}><ImArrowLeft/></button>
                <div className='battle_team_info'>
                    {mappedUserTeam[i]}
                </div>
                <button className='next_btn' onClick={() => next()}><ImArrowRight/></button>
            </div>
            <button className='battle_btn' onClick={() => navigate('/battleground', {state: {index: i}})}>BATTLE!</button>
        </div>
    );
}

export default Battle;
