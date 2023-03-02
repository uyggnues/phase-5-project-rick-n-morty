import React from 'react';
import { useNavigate } from 'react-router-dom';

const Episode = ({e}) => {
    const navigate = useNavigate()

    return (
        <div className='episode_border' onClick={() => navigate(`/episode/${e.id}`)}>
            <p className='sEpisode_text'>{e.name}</p>
            <p className='sEpisode_text'>{e.air_date}</p>
            <p className='sEpisode_text'>{e.episode}</p>
        </div>
    );
}

export default Episode;
