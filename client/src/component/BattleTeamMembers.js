import React, { useState, useEffect } from 'react';

const BattleTeamMembers = ({user}) => {
    const [BP, setBP] = useState([])
    // console.log(user.team_members)

    const mappedBattleTeamM = user.team_members.map( tm => tm.map( teamM => 
        <div key={teamM.id} className='team_display_teamM'>
            <img src={teamM.image} alt='img' className='battle_M_img'/>
            <p className='battle_display_text'>{teamM.name}</p>
        </div>
    ))
    
    useEffect(() => {
        user.team_members.map( t => t.map( tm => BP.length < 5 ? setBP(current => [...current, tm.name.length * tm.origin.length]) : null))
    },[])
    
    console.log(BP)
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
