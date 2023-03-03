import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../Context/UserContext';

const Battle = () => {

    const { user } = useContext(UserContext)
    console.log(user)

    return (
        <div className='battle'>
            <div className='battle_title'>Choose your team</div>
            <div className='battle_team'>
                <button className='previous_btn'>{'<'}</button>
                <div className='battle_team_info'>

                </div>
                <button className='next_btn'>{'>'}</button>
            </div>
        </div>
    );
}

export default Battle;
