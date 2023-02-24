import React, { useEffect, useContext } from 'react'
import Character from './Character'
import { CharacterContext } from '../Context/CharacterContext';

const Characters = () => {
    const {characters, setCharacters, fetchCharacters} = useContext(CharacterContext)

    const mappedCharacters = characters.map(character => <Character key={character.id} character={character}/>)

    useEffect(() => {
        fetchCharacters()
    }, [])

    return (
        <div className='chars'>
            {mappedCharacters}
        </div>
    );
}

export default Characters;