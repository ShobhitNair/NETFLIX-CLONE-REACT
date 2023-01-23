import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import { useState } from "react";
import "./ListItem.scss"

export default function ListItem({index}) {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://www.youtube.com/embed/1d0Zf9sXlHk"
  return (
    <div className="listItem"
     style={{left: isHovered && index * 225 -50 + index * 2.5}}
      onMouseEnter={()=>setIsHovered(true)} 
      onMouseLeave={()=>setIsHovered(false)}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3eV1k2aCR1KXMv2ckC1MIDJ0GYnmc105QK6uPkwEExjjih00HzyUcaEWip9v9TZUpjJA&usqp=CAU" alt="" />
        {isHovered && (
      <>
        <video src={trailer} autoPlay={true} loop/>
        <div className="itemInfo">
            <div className="icons">
                <PlayArrow className="icon"/>
                <Add className="icon"/>
                <ThumbUpAltOutlined className="icon"/>
                <ThumbDownOutlined className="icon"/>
            </div>
            <div className="itemInfoTop">
                <span>1 hour 14 mins</span>
                <span className="limit">+16</span>
                <span>1999</span>
            </div>
            <div className="desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam qui quas neque, corrupti distinctio in illo dolores quidem, et placeat quae? Architecto consectetur adipisci repellat magnam iusto quia, sunt eos?
            </div>
            <div className="genre">Action</div>
        </div>
      </>
        )}

    </div>
  )
}
