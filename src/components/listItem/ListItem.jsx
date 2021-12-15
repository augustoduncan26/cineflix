import {PlayArrow, Add, ThumbDownOutlined, ThumbDownAltOutlined} from '@material-ui/icons';
import { useState } from 'react';
import './listItem.scss';

const ListItem = ({index}) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "/trilers/triler_01.mp4";
  return (
    <div className="listItem"
    style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
    onMouseEnter={()=>setIsHovered(true)} 
    onMouseLeave={()=>setIsHovered(false)}>
      
    <img src="/images/image_preview_01.png" />

      { isHovered && (
      <>
      <video src={trailer} loop autoPlay={true} />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow className="icon"/>
          <Add className="icon" />
          <ThumbDownAltOutlined className="icon" />
          <ThumbDownOutlined className="icon" />
        </div>
        <div className="itemInfoTop">
          <span>1 hour 14 mins</span>
          <span className="limit">16+</span>
          <span>1999</span>
        </div>
        <div className="desc">
          dafdfadsfasdfasdfasdfa asdf asdf asdf asd
          asdfasdfasdfasdfasdfasdf asdfasdf asdf 
          asdfasdfasdfasdfasdfasdf adf asdfasd
        </div>
        <div className="genre">Action</div>
      </div>
      </>)
      }
    </div>
  )
}

export default ListItem
