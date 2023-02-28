import { useLocation } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react'
import { CharacterContext } from '../Context/CharacterContext';

const CharacterProfile = () => {
    const location = useLocation()
    const character = location.state.character
    const {} = useContext(CharacterContext)



    // console.log(character)

    return (
        <div className='profile'>
            <div className='top'>
                <div className='img-outline'>
                    <img src={character.image} alt='character profile'/>
                    
                </div>
                <div className='pInfo'>
                    <div className='pText'>Name: {character.name}</div>
                    <div className='pText'>species: {character.species}</div>
                    <div className='pText'>gender: {character.gender}</div>
                    {character.character_class === '' ?
                    null
                    :
                    <p className='cardText'>type: {character.character_class}</p>
                    }
                </div>
            </div>
            <div className='bottom'>
                
            </div>
        </div>
    );
}

export default CharacterProfile;
