import React, { useEffect, useContext, useState } from 'react'
import { CharacterContext } from '../Context/CharacterContext';
import { TeamContext } from '../Context/TeamContext';
import { UserContext } from '../Context/UserContext';
import TeamCharacter from './TeamCharacter';
import TeamMembers from './TeamMembers';
import { useParams } from 'react-router-dom';


const UpdateTeam = () => {
    const {characters, fetchCharacters, fetchOneChar, teamMem, setTeamMem} = useContext(CharacterContext)
    const {fetchOneTeam, team} = useContext(TeamContext)
    const {user} = useContext(UserContext)
    // const [chars, setChars] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [blackListedIds, setBlackListedIds] = useState([])
    const params = useParams()
    const teamId = parseInt(params.team_id)
    const [updatingTeam, setUpdatingTeam] = useState({
        name: team.name,
        user_id: user.id,
    })

    useEffect(() => {
        fetchOneTeam(teamId)
    }, [])

    // console.log(team.team_members)
  
    useEffect(() => {
        fetchCharacters()
    },[])

    const handleDragOver = (e) => {
        e.preventDefault()
    }

    const handleDrag = (e, charType) => {
        e.dataTransfer.setData('charType', charType)
    }
    // console.log(blackListedIds)
    const handleDrop = (e) => {
        const charType = e.dataTransfer.getData('charType')
        // console.log(charType, blackListedIds)
        if (team.team_members.length < 5 && !blackListedIds.includes(charType)){
            setBlackListedIds(current => [...current, charType])
            // debugger
            fetchOneChar(parseInt(charType))
            team.team_members += charType
        }
    }
    const filteredCharacters = characters.filter(char => char.name.toLowerCase().includes(searchInput.toLowerCase()))

    const mappedCharacters = filteredCharacters.map( c => <TeamCharacter key={c.id} c={c} handleDrag={handleDrag}/>)

    
    // teamMem.map( m => parseInt(chars) === m.id)

    const handleChange = (e) => {
        setUpdatingTeam({...updatingTeam, [e.target.name]:e.target.value})
    }
    // console.log(team.team_members)
    const removeTeamMember = (e) => {
        const charType = e.dataTransfer.getData('charType')
        if (charType !== null) {
            // debugger
            team.team_members = team.team_members.filter( m => m.id !== parseInt(charType))
        }
        return team.team_members
    }


    return (
        <div className='team-page'>
            <form onSubmit={(e) => console.log(e, team, teamMem, setUpdatingTeam, setTeamMem, setBlackListedIds)} className='teamForm'>
                <input id='team_name' type='text' placeholder='your team name here' name='name' value={team?.name || 'name'} onChange={handleChange}/>
                <div className='canvas' onDrop={handleDrop} onDragOver={handleDragOver}>
                    <TeamMembers cha={team.team_members} handleDrag={handleDrag}/>
                </div>
                <button className='createTeam'>UPDATE!</button>
            </form>
            <div className='search'>
                <input className='search_bar' type='text' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder='search for...'/>
            </div>
            <div className='char-in-team' onDragOver={handleDragOver} onDrop={ removeTeamMember}>
                {mappedCharacters}
            </div>
        </div>
    );
}

export default UpdateTeam;
