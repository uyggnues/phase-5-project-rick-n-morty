import React, { useEffect, useContext, useState } from 'react'
import { CharacterContext } from '../Context/CharacterContext';
import { TeamContext } from '../Context/TeamContext';
import { UserContext } from '../Context/UserContext';
import TeamCharacter from './TeamCharacter';
import TeamMembers from './TeamMembers';
import { useParams, useNavigate} from 'react-router-dom';


const UpdateTeam = () => {
    const {characters, fetchCharacters, fetchOneCharU, TM, setTM} = useContext(CharacterContext)
    const {fetchOneTeam, team, updateTeam} = useContext(TeamContext)
    const {user} = useContext(UserContext)
    // const [chars, setChars] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [blackListedIds, setBlackListedIds] = useState([])
    const params = useParams()
    const teamId = parseInt(params.team_id)
    const [ttm, setTtm] = useState([])
    const navigate = useNavigate()
    const [updatingTeam, setUpdatingTeam] = useState({
        id: teamId,
        name: team.name,
        user_id: user.id,
    })

    useEffect(() => {
        fetchOneTeam(teamId)
    }, [])

    // console.log(team.id)
  
    useEffect(() => {
        fetchCharacters()
    },[])

    const handleDragOver = (e) => {
        e.preventDefault()
    }

    ttm.map ( m => blackListedIds.length < ttm.length? setBlackListedIds(current => [...current, m.id.toString()]) : null)
    useEffect(() => {
    },[])

    const handleDrag = (e, charType) => {
        e.dataTransfer.setData('charType', charType)
    }
    // console.log(blackListedIds)
    const handleDrop = (e) => {
        const charType = e.dataTransfer.getData('charType')
        // console.log(charType, blackListedIds)
        if (ttm.length < 5 && !blackListedIds.includes(charType)){
            setBlackListedIds(current => [...current, charType])
            // debugger
            fetchOneCharU(parseInt(charType))
        }
    }
    // console.log(ttm)
    useEffect(() => {
            if (TM !== null) {
                setTtm(current => [...current, TM])
            }
        },[TM])
        
    const filteredCharacters = characters.filter(char => char.name.toLowerCase().includes(searchInput.toLowerCase()))

    const mappedCharacters = filteredCharacters.map( c => <TeamCharacter key={c.id} c={c} handleDrag={handleDrag}/>)

    
    // teamMem.map( m => parseInt(chars) === m.id)

    const handleChange = (e) => {
        setUpdatingTeam({...updatingTeam, [e.target.name]:e.target.value})
    }

    

    const removeTeamMember = (e) => {
        const charType = e.dataTransfer.getData('charType')
        if (charType !== null) {
            // debugger
            setBlackListedIds(current => current.filter( m => m !== charType))
            setTtm(ttm.filter( m => m.id !== parseInt(charType)))
        }
    }

    // console.log(ttm)
    useEffect(() => {
        if(team.team_members !== undefined) {
            team.team_members.map( m => setTtm(current => [...current, m]))
        }
    },[team.team_members])

    // console.log(blackListedIds)

    return (
        <div className='team-page'>
            <form onSubmit={(e) => updateTeam(e, updatingTeam, teamId, ttm, navigate)} className='teamForm'>
                <input id='team_name' type='text' placeholder={team.name} name='name' value={updatingTeam?.name} onChange={handleChange}/>
                <div className='canvas' onDrop={handleDrop} onDragOver={handleDragOver}>
                    <TeamMembers cha={ttm !== undefined ? ttm : null} handleDrag={handleDrag}/>
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
