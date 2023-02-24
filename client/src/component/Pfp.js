import React, {useState, useEffect, useContext }from 'react';
import { CharacterContext } from '../Context/CharacterContext'

const Pfp = ({character}) => {
    const {characters, getOneChar} = useContext(CharacterContext)

    // console.log(character)

    return (
        <img className='pfpImg' src={character.image} alt='pfp' onClick={() => getOneChar(character)}/>
    );
}

export default Pfp;
