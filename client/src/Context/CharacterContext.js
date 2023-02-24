import { createContext, useState, useEffect } from "react";

const CharacterContext = createContext()

const CharacterProvider = ({children}) => {
    const [characters, setCharacters] = useState([]);

    const fetchCharacters = () => {
        fetch(`/characters`)
        .then(resp => resp.json())
        .then(data => setCharacters(data))
    }
    const getOneChar = (character) => {
        console.log(character.id)
        fetch(`/characters/${character.id}`)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }

    

    return (
        <CharacterContext.Provider value={{characters, setCharacters, fetchCharacters, getOneChar}}>
            {children}
        </CharacterContext.Provider>
    )
}

export {CharacterContext, CharacterProvider}