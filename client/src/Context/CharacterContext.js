import { createContext, useState, useEffect, useContext, Component } from "react";
import { UserContext } from "./UserContext";
import TeamMembers from "../component/TeamMembers";

const CharacterContext = createContext()

const CharacterProvider = ({children}) => {
    const [characters, setCharacters] = useState([]);
    const [favChars, setFavChars] = useState([])
    const [teamMem, setTeamMem] = useState([])
    const [url, setUrl] = useState('')
    const {user, setUser, updatePfp} = useContext(UserContext)
    const [TM, setTM] = useState(null)


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
                    setHeart('💚')
                } 
            })
        } else if (heart === '💚') {
            fetch(`/users/${user.id}/fav_characters/${character.id}`, {
                method: 'DELETE',
            })
            setFavChars(current => current.filter( t => t.character.id !== character.id)
            )
            setHeart('🖤')
        }
    }
    
    // current.filter( c => c.id !== character.id)
    // {
    //     const teamId = current.findIndex(ele => ele.team.id === t.id)
    //     return [...current.slice(0, teamId), ...current.slice(teamId + 1)]
    // }
    // console.log(favChars)
    const fetchOneChar = (chars) => {
        // console.log(chars)
        fetch(`/characters/${parseInt(chars)}`)
        .then(resp => resp.json())
        .then( data => {
            setTeamMem(current => [...current, data])
            // console.log(data)
        })
    }

    const fetchOneCharU = (chars) => {
        // console.log(chars)
        fetch(`/characters/${chars}`)
        .then(resp => resp.json())
        .then( data => {
            setTM(data)
            // console.log(data)
        })
    }
    // console.log(teamMem)


    const favCharacters = () => {
        fetch(`/users/${user.id}/fav_characters`)
        .then(resp => resp.json())
        .then(data => setFavChars(data))
    }
    

    return (
        <CharacterContext.Provider value={{characters, setCharacters, fetchCharacters, getOneChar, fav, favCharacters, favChars, fetchOneChar, teamMem, setTeamMem, fetchOneCharU, TM, setTM}}>
            {children}
        </CharacterContext.Provider>
    )
}

export {CharacterContext, CharacterProvider}