import { createContext, useState, useEffect, useContext, Component } from "react";
import { UserContext } from "./UserContext";

const CharacterContext = createContext()

const CharacterProvider = ({children}) => {
    const [characters, setCharacters] = useState([]);
    const [favChars, setFavChars] = useState([])
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
    }, [url])

    const fav = (heart, setHeart, favorite, character) => {
        if (heart === '🖤') {
            fetch('/fav_characters', {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json' },
                body: JSON.stringify(favorite)
            })
            .then(resp => {
                if (resp.status === 201) {
                    setHeart('💗')
                } 
            })
        } else if (heart === '💗') {
            fetch(`/users/${user.id}/fav_characters/${character.id}`, {
                method: 'DELETE',
            })
            .then(resp => {
                if (resp.status === 204) {
                    setHeart('🖤')
                    setFavChars(current => {
                        const charId = current.findIndex(ele => ele.id === character.id)
                        return [...current.slice(0, charId), ...current.slice(charId + 1)]
                    })
                }
            })
        }
    }

    const favCharacters = () => {
        fetch(`/users/${user.id}/fav_characters`)
        .then(resp => resp.json())
        .then(data => setFavChars(data))
    }

    

    return (
        <CharacterContext.Provider value={{characters, setCharacters, fetchCharacters, getOneChar, fav, favCharacters, favChars}}>
            {children}
        </CharacterContext.Provider>
    )
}

export {CharacterContext, CharacterProvider}