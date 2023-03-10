import {useEffect, useState, useContext } from 'react'
import { UserContext } from '../Context/UserContext' 
import {Link, useNavigate} from 'react-router-dom'

const Welcome = () => {
    const {user} = useContext(UserContext)
    const navigate = useNavigate()

    if (!user) return(
        <div className='welcome'>
            Rick And Morty 
            <br/>
            <p>
                Wants YOU to 
                <br/>
                <Link className='link' to={'/signup'}>Signup</Link> or <Link className='link' to={'/login'}>Login</Link> 
            </p>
            <div className='pic'/>
        </div>
    )

    return (
        <div className='welcome'>
            Rick And Morty 
            <br/>
            <p>
                Welcomes YOU!
            </p>
            <div className='welcomePic' onClick={() => navigate('/characters')}/>
        </div>
    );
}

export default Welcome;
