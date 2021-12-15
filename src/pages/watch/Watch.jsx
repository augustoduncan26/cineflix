import { ArrowBackIosOutlined } from '@material-ui/icons';
import './watch.scss';


function Watch() {
  return (
    <div className="container">
    <div className="watch">
      <div className="back">
      <ArrowBackIosOutlined />
        Home
      </div>
      <video className="video" progress autoPlay controls src="videos/Road84970.mp4" />
    </div>
    </div>
  )
}

export default Watch
