import React from 'react';

const TeamCharacter = ({c, handleDrag}) => {
    return (
        <div className='char-card-in-team' draggable onDragStart={(e) => handleDrag(e, `${c.id}`)}>
            <img className='char-img-in-team' src={c.image} alt='img'/>
            <p className='cardText-in-team'>{c.name}</p>
        </div>
    );
}

export default TeamCharacter;
