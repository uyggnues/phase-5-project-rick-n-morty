import React from 'react';
import { useNavigate } from 'react-router-dom';

const StarringCharacters = ({sc}) => {
    const navigate = useNavigate()

    // console.log(sc)
    return (
        <div>
            <img className='fav_char_img' src={sc.character.image} alt='favorite characters' onClick={() => navigate(`/characters/${sc.character.id}`, {state: {character: sc.character}})}/>
            <p className='fav_char_name'>{sc.character.name}</p>
        </div>
    );
}

export default StarringCharacters;
