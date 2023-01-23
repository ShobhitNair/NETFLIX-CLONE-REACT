import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./Featured.scss"

export default function Featured({type}) {
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
               <img  src="https://cdn.mos.cms.futurecdn.net/cjtEjEGEgk2UTKxrrU2tih-1200-80.jpg" alt="" />
               <div className="info">
                 <img src="https://cdn1.ftimg.com/images/logos/big/en_US/matrix-logo.png" alt="" />
                 <span className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nisi laboriosam tenetur provident necessitatibus eaque veritatis eveniet impedit odio vero, deleniti sit, ea fuga earum assumenda sequi alias, distinctio iusto.
                 </span>
                 <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined />
                    <span>Info</span>
                </button>
                 </div>
               </div>
    </div>
  )
}
