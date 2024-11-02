import React, { useState , useEffect} from "react";
import axios from './axios';
import './Row.css';
// import fetchURL from './App'

import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseurl = "https://images.tmdb.org/t/p/original/"

function Row({ title, fetchURL, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerURL, setTrailerURL] = useState("")
    // console.log(fetchURL);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL); 
            setMovies(request.data.results);
            return request; 
        }
        fetchData();
    }, [fetchURL]) ;
    


    const opts = {
        height : "390",
        width: "100%",
        playerVars: { 
            
            autoplay:1,
        },
    };
    const handleClick = (movie) => {
        if (trailerURL) {
            setTrailerURL("");
        }
        else {
            movieTrailer(movie?.name || "")
            .then ( url => {
                const urlParams = new URLSearchParams(new URL(url).search)
                let new_url = urlParams.get('v')
                setTrailerURL (new_url );
                // console.log(trailerURL);
            }) 
            .catch((error) => console.log(error))
        }
    }
    // console.log(trailerURL)
    return(
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie => (
                    <img
                    key={movie.id}
                    onClick={() => handleClick(movie)}
                    className={`row_poster ${isLargeRow &&  "row_posterLarge"}`} 
                    src = {`${baseurl}${ isLargeRow ? movie.poster_path : movie.backdrop_path }`} alt = {movie.name}/>
                
                // console.log (movie)
                )
                )}

            </div>
            {trailerURL && <Youtube videoId={trailerURL} opts = {opts} />}

        </div>
    )
}
export default Row