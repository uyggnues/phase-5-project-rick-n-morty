import { createContext, useState, useEffect, useContext } from "react";
import { resolvePath } from "react-router-dom";
    const EpisodeContext = createContext()

    const EpisodeProvider = ({children}) => {
        const [episodes, setEpisodes] = useState([])
        const [eps, setEps] = useState([])
        const [EProfile, setEProfile] = useState([])
        const [chars, setChars] = useState([])


    const fetchStarredEpisodes = (character) => {
        fetch(`/ch_ep/${character.id}`)
        .then(resp => resp.json())
        .then(data => setEpisodes(data))
    }

   const fetchEpisodes = () => {
    fetch('/episodes')
    .then(resp => resp.json())
    .then(data => setEps(data))
   }

   const fetchEpisodeProfile = (epId) => {
    fetch(`/episodes/${epId}`)
    .then(resp => resp.json())
    .then(data => setEProfile(data))
   }

   const fetchStarringCharacters = (epId) => {
    fetch(`/ep_ch/${epId}`)
    .then(resp => resp.json())
    .then(data => setChars(data))
   }



    return (
        <EpisodeContext.Provider value={{fetchStarredEpisodes, episodes, fetchEpisodes, eps, fetchEpisodeProfile, EProfile, fetchStarringCharacters, chars}}>
            {children}
        </EpisodeContext.Provider>
    )
}

export {EpisodeContext, EpisodeProvider}