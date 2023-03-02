import React, { useState, useEffect, useContext } from 'react'
import { CharacterContext } from '../Context/CharacterContext';
import { UserContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';

const Character = ({character}) => {
    const {user} = useContext(UserContext)
    const {fav} = useContext(CharacterContext)
    const navigate = useNavigate()
    const heartItem = user.fav_char.find(c => c.character_id === character.id) ? '💚' : '🖤'
    const [heart, setHeart] = useState(heartItem)
    const [favorite, setFavorite] = useState({
        user_id: user.id,
        character_id: character.id
    })
    

    return (
        <div className='char-card'>
            <img className='char-img' src={character.image} alt='img' onClick={() => navigate(`/characters/${character.id}`, {state: {character: character}})}/>
            <div className='card-info'>
                <p className='cardText'>name: {character.name}</p>
                <p className='cardText'>species: {character.species}</p>
                <p className='cardText'>gender: {character.gender}</p>
                {character.character_class === '' ?
                    null
                    :
                    <p className='cardText'>type: {character.character_class}</p>
                }
            </div>
                <button className='like_btn' onClick={() => fav(heart, setHeart, favorite, character)}>{heart}</button>
        </div>
    );
}

export default Character;