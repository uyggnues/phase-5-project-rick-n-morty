import { useLocation } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react'
import { CharacterContext } from '../Context/CharacterContext';
import { EpisodeContext } from '../Context/EpisodeContext';
import StarredEpisodes from './StarredEpisodes';

const CharacterProfile = () => {
    const location = useLocation()
    const character = location.state.character
    const {} = useContext(CharacterContext)
    const {fetchStarredEpisodes, episodes} = useContext(EpisodeContext)

    useEffect(() => {
        fetchStarredEpisodes(character)
    }, [])

    console.log(episodes)

    const mappedCharEpisodes = episodes.map ( ce => <StarredEpisodes key={ce.id} ce={ce}/>)

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
                    <div className='cardText'>type: {character.character_class}</div>
                    }
                </div>
            </div>
            <div className='bottom'>
                <h2 className='starred_episodes'>starred episodes</h2>
                <div className='favChar'>
                <div className='fav_char'>{mappedCharEpisodes}</div>
                    
                </div>
            </div>
        </div>
    );
}

export default CharacterProfile;
