import { createContext, useState, useEffect } from "react";

const TeamContext = createContext()

const TeamProvider = ({children}) => {
    const [teams, setTeams] = useState([])

    const createTeam = (e, team) => {
        // console.log(team)
        e.preventDefault()

        fetch('/teams', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(team)
        })
        .then(resp => {
            // console.log(resp)
            if (resp.status === 201) {
                resp.json().then(data => setTeams(current => [...current, data]))
                console.log('created')
            }
        })
    }

    

    return (
        <TeamContext.Provider value={{createTeam}}>
            {children}
        </TeamContext.Provider>
    )
}

export {TeamContext, TeamProvider}