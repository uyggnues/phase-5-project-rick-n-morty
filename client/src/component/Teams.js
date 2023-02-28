import React, { useEffect, useContext, useState } from 'react'
import { TeamContext } from '../Context/TeamContext';
import Team from './Team';

const Teams = () => {

    const {fetchTeams, teams} = useContext(TeamContext)

    useEffect(() => {
        fetchTeams()
    },[])

    const mappedTeams = teams.map( t => <Team key={t.id} t={t}/>)

    return (
        <div>
            {mappedTeams}
        </div>
    );
}

export default Teams;
