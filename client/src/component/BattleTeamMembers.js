import React, { useState, useEffect } from 'react';

const BattleTeamMembers = ({user, tId}) => {
    const [BP, setBP] = useState([])
    const [teamMem, setTeamMem] = useState([])
    const [displayMem, setDisplayMem] = useState([])
    
    useEffect(() => {
        user.team_asso.map( a => a.map( ta => 
            // console.log(ta)
            tId === ta.team_id ? setTeamMem(current => [...current, ta.character_id]) : null
            ))
    }, [])
    
    // console.log(displayMem)
        
    const mappedBattleTeamM = user.team_members.map( tm => 
        // console.log(tm)
        tm.map( teamM => 
            // !displayMem.includes(teamM.id) ? setDisplayMem(current => [...current, teamM]) : null
            console.log(!displayMem.includes(teamM.id))
            // console.log([...new Set(teamM)])
            // teamMem.includes(teamM.id) ?
            // <div key={teamM.id} className='team_display_teamM'>
            //     <img src={teamM.image} alt='img' className='battle_M_img'/>
            //     <p className='battle_display_text'>{teamM.name}</p>
            // </div>
            // :
            // null
        )
    )
    
        // console.log(user)

    useEffect(() => {
        user.team_members.map( t => t.map( tm =>
            // console.log(tm)
            BP.length < 5 ? setBP(current => [...current, tm.name.length * tm.origin.length]) : null
        ))
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
