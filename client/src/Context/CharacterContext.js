import { createContext, useState, useEffect, useContext, Component } from "react";
import { UserContext } from "./UserContext";

const CharacterContext = createContext()

const CharacterProvider = ({children}) => {
    const [characters, setCharacters] = useState([]);
    const [url, setUrl] = useState('')
    const {user, setUser, updatePfp} = useContext(UserContext)


    const fetchCharacters = () => {
        fetch(`/characters`)
        .then(resp => resp.json())
        .then(data => setCharacters(data))
    }
    const getOneChar = (character) => {
        // console.log(character.id)
        fetch(`/characters/${character.id}`)
        .then(resp => resp.json())
        .then(data => {
            setUrl(data.image)
        })
    }
    useEffect(() => {
        if (url) {
            updatePfp(url) 
        }
    }, [url, updatePfp])

    

    return (
        <CharacterContext.Provider value={{characters, setCharacters, fetchCharacters, getOneChar}}>
            {children}
        </CharacterContext.Provider>
    )
}

export {CharacterContext, CharacterProvider}