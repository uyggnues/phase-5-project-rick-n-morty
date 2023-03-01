import React, {useState, useEffect, useContext} from 'react';
import {useNavigate, Link} from 'react-router-dom'
import { UserContext } from '../Context/UserContext';

const UpdateProfile = () => {
    const navigate = useNavigate()
    const {user, updateUser} = useContext(UserContext)
    const [updateP, setUpdateP] = useState({
        name: user.name,
        email: user.email,
        key_words: user.key,
    })

    const handleChange = (e) => {
        setUpdateP({...updateP, [e.target.name]:e.target.value})
    }

    return (
        <div className='form'>
            <form className='login' onSubmit={(e) => updateUser(e, updateP, navigate, setUpdateP, user)}>
                <h1 className='LOGIN'>update profile</h1>
                <label>name</label>
                <input type='text' name='name' value={updateP.name} onChange={handleChange}/>
                <label >email</label>
                <input type='text' name='email' value={updateP.email} onChange={handleChange} />
                <label >key words</label>
                <input type='text' name='key_words' value={updateP.key_words} onChange={handleChange} />
                <button className='update_btn' type='submit'>update</button>
                <br/>
            </form>
        </div>
    );
}

export default UpdateProfile;
