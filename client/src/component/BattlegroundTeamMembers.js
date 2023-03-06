import React, { useState, useEffect, useContext } from 'react';
import { TeamContext } from '../Context/TeamContext';
import EnemyTeams from './EnemyTeams';
import { ImArrowRight, ImArrowLeft } from 'react-icons/im'

const BattlegroundTeamMembers = ({user, t}) => {
    const {fetchEnemyTeam, enemyTeams} = useContext(TeamContext)
    const [BP, setBP] = useState([])
    const [i, setI] = useState(0)

    useEffect(() => {
        fetchEnemyTeam(user)
    },[])

    console.log(enemyTeams)
    
    const mappedBattleTeamM = t.team_members.map( tm => 
            t.team_members.includes(tm) ?
            <div key={tm.id} className='team_display_teamM'>
                <img src={tm.image} alt='img' className='battleground_M_img'/>
                <p className='battleground_display_text'>{tm.name}</p>
            </div>
            :
            null
    )

    useEffect(() => {
        t.team_members.map( t => 
            // console.log(t)
            BP.length < 5 ? setBP(current => [...current, t.name.length * t.origin.length]) : null
        )
    },[])

    const mappedEnemyTeams = enemyTeams.map(e => 
        <EnemyTeams key={e.id} e={e} et={e}/>
    )

    const next = () => {
        if (i >= enemyTeams.length - 1) {
            setI(0)
        } else {
            setI(current => current + 1)
        }
    }

    const previous = () => {
        if (i <= 0) {
            setI(enemyTeams.length - 1)
        } else {
            setI(current => current - 1)
        }
    }
    return (
        <div className='BG'>
            <div className='teamM_display'>
                {mappedBattleTeamM}
            </div>
            <p>vs</p>
            <div className='enemy_display'> 
                <button className='previous_btn' onClick={() => previous()}><ImArrowLeft/></button>
                {mappedEnemyTeams[i]}
                <button className='next_btn' onClick={() => next()}><ImArrowRight/></button>
            </div>
        </div>
    );
}

export default BattlegroundTeamMembers;