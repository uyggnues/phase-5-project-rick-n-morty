import React, {useState, useEffect, useContext} from 'react'
import { UserContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const {logout} = useContext(UserContext)
    const navigate = useNavigate()

    return (
        <button className='logout' onClick={() => logout(navigate)}>Logout</button>
    );
}

export default Logout;
