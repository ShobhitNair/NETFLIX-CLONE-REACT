import { API_KEY, imageUrl } from '../../constants/constants'
import { useEffect, useState } from "react"
import axios from '../../axios'
import "./Featured.scss"

export default function Featured({type}) {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(
      `/trending/all/day?api_key=${API_KEY}`).then((response)=>{
        console.log(response.data);
        setMovie(response.data.results[2])
      })
  
  }, [])
  
  return (
    <div className="featured">
        {type && (
            <div className="category">
            <span>{type === "movie" ? "Movies" : "Series"}</span>
            <select name="genre" id="genre">
                <option>Genre</option>
                <option value="adventure">Adventure</option>
                <option value="comedy">Comedy</option>
                <option value="crime">Crime</option>
                <option value="fantasy">Fantasy</option>
                <option value="horror">Horror</option>
                <option value="romance">Romance</option>
                <option value="drama">Drama</option>
                <option value="animaton">Animation</option>

            </select>
            </div>
        )}
               <img  src={movie ? imageUrl+movie.backdrop_path :""} />
               <div className="info">
                 <h1 className="title">{movie ? movie.title : ""}</h1>
                 <span className="desc">
                    {movie ? movie.overview : ""}
                 </span>
                 <div className="buttons">
                <button className="play">
                    
                    <span>Play</span>
                </button>
                <button className="more">
                   
                    <span>My List</span>
                </button>
                 </div>
               </div>
    </div>
  )
}
