import React, {useState, useEffect, useContext }from 'react';
import { UserContext } from '../Context/UserContext'
import { TeamContext } from '../Context/TeamContext'
import { CharacterContext } from '../Context/CharacterContext'
import Pfp from './Pfp';
import FavCharacters from './FavCharacters';
import FavTeams from './FavTeams';
import { FaBars, FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
const Profile = () => {
    const [showEdit, setShowEdit] =useState(false)
    const [showFav, setShowFav] = useState('char')
    const [showPfp, setShowPfp] = useState(false)
    const [deleteBtn, setDeleteBtn] = useState(false)
    const {user, deleteUser} = useContext(UserContext)
    const {fetchFavTeams, favTeams} = useContext(TeamContext)
    const {characters, fetchCharacters, favCharacters, favChars} = useContext(CharacterContext)
    const navigate = useNavigate()
    useEffect(() => {
        fetchCharacters()
      }, [])

    useEffect(() => {
        favCharacters()
    }, [])

    useEffect(() => {
        fetchFavTeams()
    }, [])

    
    const mappedKeyWords = user.key ? user.key.map( k => <div className='key' key={k}>{k}</div>) : []

    const mappedFTeams = favTeams.map( ft => <FavTeams key={ft.id} ft={ft}/>)

    const mappedFavChars = favChars.map( c => <FavCharacters key={c.id} char={c}/>)

    const mappedChars = characters.map(character => <Pfp key={character.id} character={character} />)


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
                <div className='info_border'>
                    <div className='info_info'>
                        <div className='pInfo'>
                                <div className='pText'>Name: {user.name}</div>
                                <div className='pText'>Email: {user.email}</div>
                        </div>
                        <div className='key_box'>
                            {mappedKeyWords}
                        </div>
                    </div>

                    <button className='update_profile_btn' onClick={() => setShowEdit(current => !current)}>
                        <FaBars />
                    </button>
                        {showEdit ?
                            <div className='edit_bar_box'>
                                <button className='edit-btn' onClick={() => navigate('/update_profile')}>edit</button>
                                {deleteBtn ?
                                    <>
                                        <div className='warning'>Are you sure you want to delete your profile? This action CANNOT be undone.</div>
                                        <div className='btn'>
                                            <button className='warning-btn' onClick={() => deleteUser(user, navigate)}>delete</button>
                                            <button className='warning-btn2' onClick={() => setDeleteBtn(current => !current)}>cancel</button>
                                        </div>
                                    </>
                                    :
                                    <button className='edit-btn' onClick={() => setDeleteBtn(current => !current)}>delete</button>
                                }
                            </div>
                            :
                            null
                        }
                </div>
            </div>
            <div className='bottom'>
                <h2 onClick={() => setShowFav('char')}>Liked Characters</h2>
                <h2 onClick={() => setShowFav('')}>Liked Teams</h2>
                <div className='favChar'>
                    {showFav === 'char' ?
                    <div className='fav_char'>{mappedFavChars}</div>
                    :
                    <div className='fav_teams'>{mappedFTeams}</div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Profile;
