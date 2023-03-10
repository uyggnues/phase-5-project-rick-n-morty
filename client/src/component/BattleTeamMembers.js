import React, { useState, useEffect, useContext } from 'react';

const BattleTeamMembers = ({user, t}) => {
    const [BP, setBP] = useState([])

    // console.log(t)
    
    const mappedBattleTeamM = t.team_members.map( tm => 
            t.team_members.includes(tm) ?
            <div key={tm.id} className='team_display_teamM'>
                <img src={tm.image} alt='img' className='battle_M_img'/>
                <p className='battle_display_text'>{tm.name}</p>
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
    
    // console.log(BP)
    const sum = BP.length > 1 ? BP.reduce((a, b) => {return (a + b)}) : null


    return (
        <div>
            <div className='teamM_display'>
                {mappedBattleTeamM}
            </div>
            <p className='battle_power'>battle Power: {sum}</p>
        </div>
    );
}

export default BattleTeamMembers;
