import React, { useState } from 'react';

const EnemyTeams = ({e, et}) => {
    console.log(et)
    const mappedETM = e.team_members.map(etm => 
        // console.log(etm.name)
        e.team_members.includes(etm) ? 
            <div key={etm.id} className='team_display_teamM'>
                <img src={etm.image} alt='img' className='battleground_M_img'/>
                <p className='battleground_display_text'>{etm.name}</p>
            </div> 
        :null
    )


    return (
        <div className='enemy_display'>
            {mappedETM}
        </div>
    );
}

export default EnemyTeams;
