import React, { useEffect, useContext, useState } from 'react'
import { CharacterContext } from '../Context/CharacterContext';
import TeamCharacter from './TeamCharacter';
import TeamMembers from './TeamMembers';


const MakeTeams = () => {
    const {characters, setCharacters, fetchCharacters, fetchOneChar, teamMem} = useContext(CharacterContext)
    const [chars, setChars] = useState(null)

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
    // teamMem.map( m => parseInt(chars) === m.id)
    useEffect(() => {
        if (chars !== null) {
            fetchOneChar(chars)
        }
    },[chars])


    return (
        <div className='team-page'>
            <input id='team_name' type='text' placeholder='your team name here'/>
            <div className='canvas' onDrop={handleDrop} onDragOver={handleDragOver}>
                <TeamMembers cha={teamMem}/>
            </div>
            <div className='char-in-team' >
                {mappedCharacters}
            </div>
        </div>
    );
}

export default MakeTeams;
