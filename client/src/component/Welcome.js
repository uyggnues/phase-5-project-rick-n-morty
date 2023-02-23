import {useEffect, useState, useContext } from 'react'
import { UserContext } from '../Context/UserContext' 
import {Link} from 'react-router-dom'

const Welcome = () => {
    const {user} = useContext(UserContext)


    if (!user) return(
        <div>
            Rick N Morty Wants YOU to <Link to={'/signup'}>Signup</Link> | <Link to={'/login'}>Login</Link> 
        </div>
    )

    return (
        <div>
            Rick N Morty Welcomes YOU!
        </div>
    );
}

export default Welcome;
