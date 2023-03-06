import { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from './UserContext';
    const TeamContext = createContext()

    const TeamProvider = ({children}) => {
        const {user} = useContext(UserContext)
        const [teams, setTeams] = useState([])
        const [favTeams, setFavTeams] = useState([])
        const [userTeams, setUserTeams] = useState([])
        const [team, setTeam] = useState({})

    const fetchTeams = () => {
        fetch('/teams')
        .then(resp => resp.json())
        .then(data => setTeams(data))
    }

    const createTeam = (e, team, teamMem, setTeam, setTeamMem, setBlackListedIds) => {
        // debugger
        // console.log(teamMem)
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
        setBlackListedIds([])
        
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

    const fav = (heart, setHeart, favorite, t) => {
        // console.log(t)
        if (heart === '🖤') {
            fetch('/fav_teams', {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json' },
                body: JSON.stringify(favorite)
            })
            .then(resp => {
                if (resp.status === 201) {
                    setHeart('💚')
                } 
            })
        } else if (heart === '💚') {
            fetch(`/users/${user.id}/fav_teams/${t.id}`, {
                method: 'DELETE',
            })
            .then(resp => {
                if (resp.status === 204) {
                    setHeart('🖤')
                    setFavTeams(current => {
                        const teamId = current.findIndex(ele => ele.team.id === t.id)
                        return [...current.slice(0, teamId), ...current.slice(teamId + 1)]
                    })
                }
            })
        }
    }

    const fetchFavTeams = () => {
        fetch(`/users/${user.id}/fav_teams`)
        .then(resp => resp.json())
        .then(data => setFavTeams(data))
    }

    const fetchUserTeam = (user) => {
        // console.log(user.id)
        fetch(`/user_team/${user.id}`)
        .then(resp => resp.json())
        .then(data => setUserTeams(current => [...current, data]))
    }

    const fetchOneTeam = (teamId) => {
        // console.log(teamId)
        fetch(`/teams/${teamId}`)
        .then(resp => resp.json())
        .then(data => setTeam(data))
    }

    const deleteTeam = (ut, setTm) => {
        fetch(`/teams/${ut.id}`, {
            method: 'DELETE'
        })
        .then(resp => {
            if (resp.status === 204) {
                setUserTeams(current => {
                        const teamId = current.findIndex(ele => ele.id === ut.id)
                        return [...current.slice(0, teamId), ...current.slice(teamId + 1)]
                })
            }
        })
    }


    return (
        <TeamContext.Provider value={{createTeam, fetchTeams, teams, fav, fetchFavTeams, favTeams, fetchUserTeam, userTeams, deleteTeam, fetchOneTeam, team}}>
            {children}
        </TeamContext.Provider>
    )
}

export {TeamContext, TeamProvider}