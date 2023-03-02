import React, { useEffect, useContext, useState } from 'react';
import { EpisodeContext } from '../Context/EpisodeContext';
import Episode from './Episode';

const Episodes = () => {
    const [searchInput, setSearchInput] = useState('')
    const {fetchEpisodes, eps} = useContext(EpisodeContext)

    useEffect(() => {
        fetchEpisodes()
    },[])

    // console.log(eps)
    const filteredCharacters = eps.filter(char => char.name.toLowerCase().includes(searchInput.toLowerCase()))

    const mappedEpisodes = filteredCharacters.map( e => <Episode key={e.id} e={e}/>)

    const toTop = () => {
        // console.log('click')
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
          });
    }
    const [showToTop, setShowToTop] =useState(false)
    const myScrollFunc = () => {
        let y = window.scrollY
        if ( y >= 1000 ) {
            setShowToTop(true)
        } else {
            setShowToTop(false)
        }
    }
    window.addEventListener("scroll", myScrollFunc)
    return (
        <div>
            <div className='search'>
            <input className='search_bar' type='text' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder='search for...'/>
            </div>
            <div className='ep_page'>
                {mappedEpisodes}
            </div>
            {
            showToTop ?
            <button className='to_top' onClick={() => toTop()}>⬆</button>
                :
                null
            }
        </div>
    );
}

export default Episodes;
