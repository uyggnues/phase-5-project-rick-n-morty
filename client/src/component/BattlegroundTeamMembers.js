import React, { useState, useEffect, useContext } from 'react';
import { TeamContext } from '../Context/TeamContext';
import EnemyTeams from './EnemyTeams';
import { RiArrowDropRightFill, RiArrowDropLeftFill } from 'react-icons/ri'

const BattlegroundTeamMembers = ({user, t}) => {
    const {fetchEnemyTeam, enemyTeams} = useContext(TeamContext)
    const [BP, setBP] = useState([])
    const [EBP, setEBP] = useState([])
    const [index, setIndex] = useState(0)
    const [battle, setBattle] = useState(false)
    const [results, setResults] = useState([])
    const [re, setRe] = useState(0)
    // const [run, setRun] = useState(false)

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
    const ct = enemyTeams !== undefined ? enemyTeams[index] : null
    
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
        setResults([])
        if (index >= enemyTeams.length - 1) {
            setIndex(0)
            winner()
        } else {
            setIndex(current => current + 1)
            winner()
        }
    }

    const previous = () => {
        setEBP([])
        setResults([])
        if (index <= 0) {
            setIndex(enemyTeams.length - 1)
            winner()
        } else {
            setIndex(current => current - 1)
            // setResults([])
            winner()
        }
    }

    const sum = BP.length > 1 ? BP.reduce((a, b) => {return (a + b)}) : null
    console.log(EBP, BP)

    const winner = (BI) => {
        // setResults([])
        if ( BP[BI] > EBP[BI]) {
            if(results.length < 5) {
                setResults(current => [...current, 'won'])
                final()
            }
            return <p className='won'>WON</p> 
        } else {
            if(results.length < 5) {
                setResults(current => [...current, 'lost'])
                final()
            }
            return <p className='lost'>LOST</p>
        }
    }


    const final = () => {
        // setResults([])
        if (results.length === 5) {
            setRe(results.filter(result => result === 'won').length) 
            setResults([])
        }
    } 


    const totalWinner = re > 2 && battle ? <p className='final_won'>WON</p> : <p className='final_lost'>LOST</p>
    


    console.log(results, re)

        
    
    return (
        <div className='BG'>
            <div className='battle_teams_display'>
            <div className='teamM_display'>
                {mappedBattleTeamM}
            </div>
            <p>vs</p>
            <div className='enemy_display'> 
                <button className='battle_previous_btn' onClick={() => previous()}><RiArrowDropLeftFill/></button>
                {mappedEnemyTeams[index]}
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
                    <div className='final_winners'>results: {totalWinner}</div>
                    <button className='next_battle' onClick={() => final() && setBattle(current => !current)}>next</button>
                </div>
                }
            </div>
        </div>
    );
}

export default BattlegroundTeamMembers;