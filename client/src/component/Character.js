import React, { useEffect, useContext } from 'react'

const Character = ({character}) => {

    return (
        <div className='char-card'>
            <img className='char-img' src={character.image} alt='img'/>
            <div className='card-info'>
                <p className='cardText'>name: {character.name}</p>
                <p className='cardText'>species: {character.species}</p>
                <p className='cardText'>gender: {character.gender}</p>
                {character.character_class === '' ?
                    null
                    :
                    <p className='cardText'>type: {character.character_class}</p>
                }
            </div>
        </div>
    );
}

export default Character;