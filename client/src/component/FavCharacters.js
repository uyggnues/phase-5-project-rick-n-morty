import React, { useState, useEffect, useContext } from 'react'
import { CharacterContext } from '../Context/CharacterContext';
import { UserContext } from '../Context/UserContext';


const FavCharacters = ({char}) => {
    // console.log(char)
    const {user} = useContext(UserContext)
    const {fav} = useContext(CharacterContext)
    const [character, setCharacter] = useState(char.character)
    const heartItem = user.fav_char.find(c => c.character_id === character.id) ? '💗' : '🖤'
    const [heart, setHeart] = useState(heartItem)
    const [favorite, setFavorite] = useState({
        user_id: user.id,
        character_id: character.id
    })

    return (
        <div>
            <img className='fav_char_img' src={character.image} alt='favorite characters'/>
            <p className='fav_char_name'>{character.name}</p>
            <button className='like_btn_in_profile' onClick={() => fav(heart, setHeart, favorite, character)}>{heart}</button>
        </div>
    );
}

export default FavCharacters;
