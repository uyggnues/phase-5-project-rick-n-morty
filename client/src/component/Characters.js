import React, { useEffect, useContext, useState } from 'react'
import Character from './Character'
import { CharacterContext } from '../Context/CharacterContext';

const Characters = () => {
    const {characters, setCharacters, fetchCharacters} = useContext(CharacterContext)
    const [searchInput, setSearchInput] = useState('')

    const filteredCharacters = characters.filter(char => char.name.toLowerCase().includes(searchInput.toLowerCase()))

    const mappedCharacters = filteredCharacters.map(character => <Character key={character.id} character={character}/>)


    useEffect(() => {
        fetchCharacters()
    }, [])

    return (
        <div className='char_page'>
            <div className='search'>
                <input className='search_bar' type='text' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder='search for...'/>
            </div>
            <div className='chars'>
                {mappedCharacters}
            </div>
        </div>
    );
}

export default Characters;