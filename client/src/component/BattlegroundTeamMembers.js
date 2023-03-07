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

    useEffect(() => {
        fetchEnemyTeam(user)
    },[])

    // console.log(enemyTeams)
    
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

    // const ct = enemyTeams[i]
    const ct = enemyTeams !== undefined ? enemyTeams[i] : null
    
    useEffect(() => {
        if (ct !== undefined) { ct.team_members.map( etm => 
            EBP.length < 5 ? setEBP(current => [...current,etm.name.length * etm.origin.length]) : null
            )}
    },[ct])
        console.log(i)
    // console.log(enemyBP)

    // EBP.length < 5 ? setEBP(current => [...current, t.name.length * t.origin.length]) : null
    const next = () => {
        if (i >= enemyTeams.length - 1) {
            setI(0)
        } else {
            setI(current => current + 1)
        }
    }

    const previous = () => {
        if (i <= 0) {
            setI(enemyTeams.length - 1)
        } else {
            setI(current => current - 1)
        }
    }

    const sum = BP.length > 1 ? BP.reduce((a, b) => {return (a + b)}) : null
    // const eSum = EBP.length > 1 ? EBP.reduce((a, b) => {return (a + b)}) : null
    console.log(EBP)
    // console.log(BP)
    // console.log(results)

    const winner = (BI) => {
        if ( BP[BI] > EBP[BI]) {
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
    const won = results.filter(result => result === 'won').length
    const lost = results.filter(result => result === 'lost').length

    // console.log(results, won, lost)

    const totalWinner = () => {
        if(won > lost) {
            return <p className='final_won'>WON</p> 
        } else {
            return <p className='final_lost'>LOST</p>
        }
    }
    return (
        <div className='BG'>
            <div className='teamM_display'>
                {mappedBattleTeamM}
            </div>
            <p>vs</p>
            <div className='enemy_display'> 
                <button className='battle_previous_btn' onClick={() => previous()}><RiArrowDropLeftFill/></button>
                {mappedEnemyTeams[i]}
                <button className='battle_next_btn' onClick={() => next()}><RiArrowDropRightFill/></button>
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