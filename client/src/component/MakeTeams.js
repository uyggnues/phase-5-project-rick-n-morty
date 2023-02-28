import React, { useEffect, useContext, useState } from 'react'
import { CharacterContext } from '../Context/CharacterContext';
import { TeamContext } from '../Context/TeamContext';
import { UserContext } from '../Context/UserContext';
import TeamCharacter from './TeamCharacter';
import TeamMembers from './TeamMembers';


const MakeTeams = () => {
    const {characters, setCharacters, fetchCharacters, fetchOneChar, teamMem} = useContext(CharacterContext)
    const {createTeam} = useContext(TeamContext)
    const {user} = useContext(UserContext)
    const [chars, setChars] = useState(null)
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
        if (teamMem.length < 5){
            const charType = e.dataTransfer.getData('charType')
            setChars(charType)
        }
    }

    const mappedCharacters = characters.map( c => <TeamCharacter key={c.id} c={c} handleDrag={handleDrag}/>)

    
    // console.log(parseInt(chars))
    // teamMem.map( m => console.log(parseInt(chars) === m.id))
    useEffect(() => {
        if (chars !== null && teamMem.map( m => parseInt(chars) === m.id )) {
            fetchOneChar(chars)
        }
    },[chars])

    const handleChange = (e) => {
        setTeam({...team, [e.target.name]:e.target.value})
    }

    return (
        <div className='team-page'>
            <form onSubmit={(e) => createTeam(e, team)}>
                <input id='team_name' type='text' placeholder='your team name here' name='name' value={team.name} onChange={handleChange}/>
                <div className='canvas' onDrop={handleDrop} onDragOver={handleDragOver}>
                    <TeamMembers cha={teamMem}/>
                </div>
            <button  >CREATE!</button>
            </form>
            <div className='char-in-team' >
                {mappedCharacters}
            </div>
        </div>
    );
}

export default MakeTeams;
