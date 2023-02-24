import React, {useState, useEffect, useContext }from 'react';
import { UserContext } from '../Context/UserContext'
import { CharacterContext } from '../Context/CharacterContext'
import Pfp from './Pfp';

const Profile = () => {
    const [showFav, setShowFav] = useState('char')
    const [showPfp, setShowPfp] = useState(false)
    const {user} = useContext(UserContext)
    const {characters, fetchCharacters} = useContext(CharacterContext)

    useEffect(() => {
        fetchCharacters()
      }, [])

    // console.log(characters)

      const mappedChars = characters.map(character => <Pfp key={character.id} character={character} />
        )


    return (
        <div className='profile'>
            <div className='top'>
                <div className='img-outline'>
                    <img src={user.pfp} alt='none' onClick={() => setShowPfp(current => !current)}/>
                    {showPfp ? 
                        <div className='pfpCard'>
                            {mappedChars}
                        </div>
                        :
                        null
                    }
                </div>
                <div className='pInfo'>
                    <div className='pText'>Name: {user.name}</div>
                    <div className='pText'>Email: {user.email}</div>
                </div>
            </div>
            <div className='bottom'>
                <h2 onClick={() => setShowFav('char')}>Liked Characters</h2>
                <h2 onClick={() => setShowFav('')}>Liked Teams</h2>
                <div>
                    {showFav === 'char' ?
                    'fav char'
                    :
                    'fav team'
                    }
                </div>
            </div>
        </div>
    );
}

export default Profile;
