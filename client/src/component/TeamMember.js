import React from 'react';

const TeamMember = ({m, handleDrag}) => {
    return (
        <div className='team_making_field_2' draggable onDragStart={(e) => handleDrag(e, `${m.id}`)}>
            <img src={m.image} alt='team member' className='team_mem_img'/>
            <p className='team_mem_text'>{m.name}</p>
            
        </div>
    );
}

export default TeamMember;
