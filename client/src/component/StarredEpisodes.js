import React from 'react';
import { useNavigate } from 'react-router-dom';

const StarredEpisodes = ({ce}) => {
    const navigate = useNavigate()
    return (
        <div className='episode_border' onClick={() => navigate(`/episode/${ce.episode.id}`)}>
            <p className='sEpisode_text'>{ce.episode.name}</p>
            <p className='sEpisode_text'>{ce.episode.air_date}</p>
            <p className='sEpisode_text'>{ce.episode.episode}</p>
        </div>
    );
}

export default StarredEpisodes;
