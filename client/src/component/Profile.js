import React, {useState, useEffect, useContext }from 'react';
import { UserContext } from '../Context/UserContext'

const Profile = () => {

    const {fetchCurrentUser, user} = useContext(UserContext)

    useEffect(() => {
        fetchCurrentUser()
      },[])

    console.log(user)

    return (
        <div className='profile'>
            <div className='top'>
                <div className='img-outline'>
                    <img src={user.pfp} alt='none'/>
                </div>
                <div className='pInfo'>
                    <div className='pText'>Name: {user.name}</div>
                    <div className='pText'>Email: {user.email}</div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
}

export default Profile;
