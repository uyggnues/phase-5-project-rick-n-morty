import { createContext, useState, useEffect } from "react";

const ProfileContext = createContext()

const ProfileProvider = ({children}) => {
    const [profile, setProfile] = useState('');

    const fetchProfile = (userId) => {
        fetch(`/user`)
        .then(resp => {
            if (resp.status === 200) {
                resp.json().then(data => setProfile(data))
            } else {
                resp.json.then(data => console.log(data))
            }
        })
    }

    

    return (
        <ProfileContext.Provider value={{profile, setProfile, fetchProfile}}>
            {children}
        </ProfileContext.Provider>
    )
}

export {ProfileContext, ProfileProvider}