import React, {useState, useContext} from 'react';
import TeamMember from './TeamMember';
import { UserContext } from '../Context/UserContext';
import { TeamContext } from '../Context/TeamContext';


const FavTeams = ({ft}) => {
    const {user} = useContext(UserContext)
    const {fav} = useContext(TeamContext)
    const heartItem = user.fav_teams.find(team => team.team_id === ft.team.id) ? '💚' : '🖤'
    const [heart, setHeart] = useState(heartItem)
    const [favorite, setFavorite] = useState({
        user_id: user.id,
        team_id: ft.id
    })
    // console.log(user)
    const t = ft.team

    const mappedTM = ft.team.team_members.map( tm => <TeamMember key={tm.id} m={tm}/> )

    return (
        <div className='team_outline'>
          <p className='teamName'>{ft.team.name}</p>
          <div className='team'>
            <div className='team_'>
              {mappedTM}
            </div>
          <button className='team_like_btn' onClick={() => fav(heart, setHeart, favorite, t)}>{heart}</button>
          </div>
        </div>
    );
}

export default FavTeams;
