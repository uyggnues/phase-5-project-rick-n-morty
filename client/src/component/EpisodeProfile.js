import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { EpisodeContext } from '../Context/EpisodeContext';
import StarringCharacters from './StarringCharacters';

const EpisodeProfile = () => {
    const params = useParams()
    const epId = parseInt(params.episode_id)
    const { fetchEpisodeProfile, EProfile, fetchStarringCharacters, chars } = useContext(EpisodeContext)

    useEffect(() => {
        fetchEpisodeProfile(epId)
    }, [])

    useEffect(() => {
        fetchStarringCharacters(epId)
    }, [])
    // console.log(chars)

    const mappedStarringCharacters = chars.map( sc => <StarringCharacters key={sc.id} sc={sc} />)

    return (
        <div className='epBox'>
            <div className='e_profile_top'>
                <p className='e_profile_info'>{EProfile.name}</p>
                <p className='e_profile_info'>{EProfile.air_date}</p>
                <p className='e_profile_info'>{EProfile.episode}</p>
            </div>
            <div className='bottom'>
                <h2 className='starred_character'>starring Characters</h2>
                <div className='favChar'>
                <div className='fav_char'>{mappedStarringCharacters}</div>
                    
                </div>
            </div>
        </div>
    );
}

export default EpisodeProfile;
