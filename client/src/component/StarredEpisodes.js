import React from 'react';

const StarredEpisodes = ({ce}) => {
    return (
        <div className='episode_border'>
            <p className='sEpisode_text'>{ce.episode.name}</p>
            <p className='sEpisode_text'>{ce.episode.air_date}</p>
            <p className='sEpisode_text'>{ce.episode.episode}</p>
        </div>
    );
}

export default StarredEpisodes;
