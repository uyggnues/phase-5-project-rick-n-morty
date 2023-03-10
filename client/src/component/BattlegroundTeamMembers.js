import React, { useState, useEffect, useContext } from 'react';
import { TeamContext } from '../Context/TeamContext';
import EnemyTeams from './EnemyTeams';
import { RiArrowDropRightFill, RiArrowDropLeftFill } from 'react-icons/ri'

const BattlegroundTeamMembers = ({user, t}) => {
    const {fetchEnemyTeam, enemyTeams} = useContext(TeamContext)
    const [BP, setBP] = useState([])
    const [EBP, setEBP] = useState([])
    const [i, setI] = useState(0)
    const [battle, setBattle] = useState(false)
    const [results, setResults] = useState([])
    const [re, setRe] = useState(0)

    useEffect(() => {
        fetchEnemyTeam(user)
    },[])

    // console.log(i)
    
    const mappedBattleTeamM = t.team_members.map( tm => 
            t.team_members.includes(tm) ?
            <div key={tm.id} className='team_display_teamM'>
                <img src={tm.image} alt='img' className='battleground_M_img'/>
                <p className='battleground_display_text'>{tm.name}</p>
            </div>
            :
            null
    )

    useEffect(() => {
        t.team_members.map( t => 
            BP.length < 5 ? setBP(current => [...current, t.name.length * t.origin.length]) : null
            )
    },[])
        // console.log(BP)

    const mappedEnemyTeams = enemyTeams.map(e => 
        <EnemyTeams key={e.id} e={e} et={e}/>
    )

    // console.log(enemyTeams[i])
    const ct = enemyTeams !== undefined ? enemyTeams[i] : null
    
    useEffect(() => {
        // console.log(ct)
        if (ct !== undefined) { 
            ct.team_members.map( etm => 
            EBP.length < 5 ? setEBP(current => [...current, etm.name.length * etm.origin.length]) : null
            )}
    },[ct])
    

    // EBP.length < 5 ? setEBP(current => [...current, t.name.length * t.origin.length]) : null
    const next = () => {
        setEBP([])
        if (i >= enemyTeams.length - 1) {
            setI(0)
            winner()
        } else {
            setI(current => current + 1)
            winner()
        }
    }

    const previous = () => {
        setEBP([])
        if (i <= 0) {
            setI(enemyTeams.length - 1)
            // setResults([])
            winner()
        } else {
            setI(current => current - 1)
            // setResults([])
            winner()
        }
    }

    const sum = BP.length > 1 ? BP.reduce((a, b) => {return (a + b)}) : null

    const winner = (BI) => {
        // debugger
        // setResults([])
        if ( BP[BI] > EBP[BI] && setResults([])) {
            if(results < 5) {
                setResults(current => [...current, 'won'])
            }
            return <p className='won'>WON</p> 
        } else {
            if(results < 5) {
                setResults(current => [...current, 'lost'])
            }
            return <p className='lost'>LOST</p>
        }
    }
    useEffect(() => {
        setRe(results.filter(result => result === 'won').length)
        
    },[results])
    // const lost = results.filter(result => result === 'lost').length
    // console.log(EBP)
    // console.log(BP)
    console.log(results, re)

    const totalWinner = () => {
        if(re > 2) {
            return <p className='final_won'>WON</p> 
        } else {
            return <p className='final_lost'>LOST</p>
        }
    }
    return (
        <div className='BG'>
            <div className='battle_teams_display'>
            <div className='teamM_display'>
                {mappedBattleTeamM}
            </div>
            <p>vs</p>
            <div className='enemy_display'> 
                <button className='battle_previous_btn' onClick={() => previous()}><RiArrowDropLeftFill/></button>
                {mappedEnemyTeams[i]}
                <button className='battle_next_btn' onClick={() => next()}><RiArrowDropRightFill/></button>
            </div>
            </div>
            <div className='battle_info'>
                {!battle ?
                <>
                    <label className='my_BP'>your battle power:</label>
                    <p>{sum}</p>
                    <button className='battle_btn_2' onClick={() => setBattle(current => !current)}>BATTLE!</button>
                </>
                :
                <div>
                    <p className='winners'>winners</p>
                    <div className='winners'>round 1: {winner(0)}</div>
                    <div className='winners'>round 2: {winner(1)}</div>
                    <div className='winners'>round 3: {winner(2)}</div>
                    <div className='winners'>round 4: {winner(3)}</div>
                    <div className='winners'>round 5: {winner(4)}</div>
                    <div className='final_winners'>results: {totalWinner()}</div>
                    <button className='next_battle' onClick={() => setBattle(current => !current)}>next</button>
                </div>
                }
            </div>
        </div>
    );
}

export default BattlegroundTeamMembers;