import React, { useEffect, useState } from 'react'
import axios from './axios'
import request from './request';
import './banner.css';


function Banner() {
    const [movie, setMovie] = useState({});

    useEffect( () => {
        async function fetchData() {
            const requests = await axios.get(request.fetchTrending)
            setMovie (   
                requests.data.results[
                    Math.floor(Math.random() * requests.data.results.length -1)
                ]
            )    
                return requests;
        }
        
        fetchData(); 
    }, [])

    function truncate(str, n){ 
        return str?.length > n ? str.substr(0,n) + "..." : str;
    }





  return (
    <header className='banner'
        style = {{
            backgroundSize : "cover",
            backgroundImage: `url(
                "https://images.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition : "center",
           
        }}>
        <div className="banner_content">

            <h1 className='banner_title'>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
             
        < div className='banner_buttons'>
            
            <button className='banner_button'>Play</button>
            <button className='banner_button'>My List</button>

        </div>

        <h1 className='banner_description'>
            {truncate(movie?.overview, 150)}
        </h1>
        </div>

        <div className='banner_fadeBottom '></div>

    </header>
  )
}

export default Banner