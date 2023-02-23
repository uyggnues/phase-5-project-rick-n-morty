import React, {useState, useEffect, useContext} from 'react'
import { UserContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const {logout} = useContext(UserContext)
    return (
        <button className='logout' onClick={logout}>Logout</button>
    );
}

export default Logout;
