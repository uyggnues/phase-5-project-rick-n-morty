import React, { useEffect, useContext, useState } from 'react'
import { CharacterContext } from '../Context/CharacterContext';
import { TeamContext } from '../Context/TeamContext';
import { UserContext } from '../Context/UserContext';
import TeamCharacter from './TeamCharacter';
import TeamMembers from './TeamMembers';
import { render, queryByAttribute } from '@testing-library/react';


const MakeTeams = () => {
    const {characters, setCharacters, fetchCharacters, fetchOneChar, teamMem, setTeamMem} = useContext(CharacterContext)
    const {createTeam} = useContext(TeamContext)
    const {user} = useContext(UserContext)
    const [chars, setChars] = useState(null)
    const [searchInput, setSearchInput] = useState('')
    const [blackListedIds, setBlackListedIds] = useState([])
    const [team, setTeam] = useState({
        name: '',
        user_id: user.id,
    })

    useEffect(() => {
        fetchCharacters()
    },[])

    const handleDragOver = (e) => {
        e.preventDefault()
    }

    const handleDrag = (e, charType) => {
        e.dataTransfer.setData('charType', charType)
    }

    const handleDrop = (e) => {
        const charType = e.dataTransfer.getData('charType')
        // console.log(charType, blackListedIds)
        if (teamMem.length < 5 && !blackListedIds.includes(charType)){
            setBlackListedIds(current => [...current, charType])
            // debugger
            setChars(charType)

        }
    }
    // console.log(chars)
    const filteredCharacters = characters.filter(char => char.name.toLowerCase().includes(searchInput.toLowerCase()))

    const mappedCharacters = filteredCharacters.map( c => <TeamCharacter key={c.id} c={c} handleDrag={handleDrag}/>)

    
    // console.log(parseInt(chars))
    // teamMem.map( m => parseInt(chars) === m.id)
    useEffect(() => {
        if (chars !== null) {
            fetchOneChar(chars)
        }
    },[chars])

    const handleChange = (e) => {
        setTeam({...team, [e.target.name]:e.target.value})
    }


    return (
        <div className='team-page'>
            <form onSubmit={(e) => createTeam(e, team, teamMem, setTeam, setTeamMem)} className='teamForm'>
                <input id='team_name' type='text' placeholder='your team name here' name='name' value={team.name} onChange={handleChange}/>
                <div className='canvas' onDrop={handleDrop} onDragOver={handleDragOver}>
                    <TeamMembers cha={teamMem} />
                </div>
                <button className='createTeam'>CREATE!</button>
            </form>
            <div className='search'>
                <input className='search_bar' type='text' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder='search for...'/>
            </div>
            <div className='char-in-team' >
                {mappedCharacters}
            </div>
        </div>
    );
}

export default MakeTeams;
