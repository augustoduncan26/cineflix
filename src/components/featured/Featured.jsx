import PlayArrow from '@material-ui/icons/PlayArrow';
import InfoOutlined from '@material-ui/icons/InfoOutlined';
//import Select from 'react-select';
//import { Select } from '@material-ui/material/Select';
import './featured.scss';

const Featured = ({type}) => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  console.log(options)
  return (
    <div className="featured">
    {
      type && (
        <div className="category">
          <span>{type === 'movie' ? 'Movies' : 'Series'}</span>
          {/*<Select
          placeholder="Select"
          name="category-name"
          options={options}
      />*/}
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )
    }
      <img src="images/pexels-photo-01.jpeg" />
      <div className="info">
      <img src="images/the_matrix.jpg" />
      <span className="desc">
      asdasdasd fasdf asd fasdf asdf 
      asdf asdf asdfasdf asdf asd fasdf 
      as dfasdf asdf asdf asdf asdf asdf 
      </span>
        <div className="buttons">
        <button className="play"><PlayArrow /><span>Play</span></button>
        <button className="more"><InfoOutlined /> <span>More Info</span></button>
        </div>
      </div>
    </div>
  )
}

export default Featured
