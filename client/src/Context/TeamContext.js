import { createContext, useState, useEffect } from "react";

    const TeamContext = createContext()

    const TeamProvider = ({children}) => {
        const [teams, setTeams] = useState([])

    const fetchTeams = () => {
        fetch('/teams')
        .then(resp => resp.json())
        .then(data => setTeams(data))
    }

    const createTeam = (e, team, teamMem, setTeam, setTeamMem) => {
        // debugger
        console.log(teamMem)
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
                resp.json().then(data => setTeams(current => {
                    teamMem.map(m => createTeamMember(m, data))
                    return [...current, data]
                }))
                // console.log('created')
            }
        })
        setTeam({
            name: ''
        })
        setTeamMem([])
        
    }

    const createTeamMember = (m, data) => {
        // debugger
        // console.log(teamMem.id, team.id)
        const member = {
            team_id: data.id,
            character_id: m.id,
        }

        fetch('/team_members',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(member)
        })
        .then(resp => {
            if (resp.status === 201) {
                resp.json().then(data => console.log(data))
            }
        })
    }

    

    return (
        <TeamContext.Provider value={{createTeam, fetchTeams, teams}}>
            {children}
        </TeamContext.Provider>
    )
}

export {TeamContext, TeamProvider}