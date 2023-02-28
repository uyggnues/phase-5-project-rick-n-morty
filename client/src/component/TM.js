import React from 'react';

const TM = ({tm}) => {
    console.log(tm)
    return (
        <div className='team_border'>
            <img src={tm.image} alt='pfp' className='team_mem_img'/>
            <p className='team_mem_text'>{tm.name}</p>
        </div>
    );
}

export default TM;
