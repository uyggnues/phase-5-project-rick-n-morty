import React from 'react';

const MyTeamMembers = ({utm}) => {

    return (
        <div className='team_border'>
            <img src={utm.image} alt='pfp' className='team_mem_img'/>
            <p className='team_mem_text'>{utm.name}</p>
        </div>
    );
}

export default MyTeamMembers;
