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

    const toTop = () => {
        // console.log('click')
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
          });
    }
    const [showToTop, setShowToTop] =useState(false)
    const myScrollFunc = () => {
        let y = window.scrollY
        if ( y >= 1000 ) {
            setShowToTop(true)
        } else {
            setShowToTop(false)
        }
    }
    window.addEventListener("scroll", myScrollFunc)
    return (
        <div className='char_page'>
            <div className='search'>
                <input className='search_bar' type='text' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder='search for...'/>
            </div>
            <div className='chars'>
                {mappedCharacters}
            </div>
            {
            showToTop ?
            <button className='to_top' onClick={() => toTop()}>⬆</button>
                :
                null
            }
        </div>
    );
}

export default Characters;