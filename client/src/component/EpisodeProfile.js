import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { EpisodeContext } from '../Context/EpisodeContext';

const EpisodeProfile = () => {
    const params = useParams()
    const epId = parseInt(params.episode_id)
    const { fetchEpisodeProfile, EProfile } = useContext(EpisodeContext)

    useEffect(() => {
        fetchEpisodeProfile(epId)
    }, [])

    console.log(EProfile)

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
                <div className='fav_char'>{}</div>
                    
                </div>
            </div>
        </div>
    );
}

export default EpisodeProfile;
