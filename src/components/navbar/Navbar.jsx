import './navbar.scss';
import Search from '@material-ui/icons/Search';
import Notifications from '@material-ui/icons/Notifications';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import { useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  }

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar" }>
        <div className="container">
        <div className="left">
          {/*<img src="images/cineflixlogo.png" />*/}
          <h2>CineFlix</h2>
          <span>Homepage</span>
          <span>Serie</span>
          <span>Movie</span>
          <span>New & Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
        <Search className="icon"/>
        <span>KID</span>
        <Notifications className="icon"/>
        <img src="images/pexels-photo-01.jpeg" />

        <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span><i className="fa fa-cog"></i> Settings</span>
              <span><i className="fas fa-sign-out-alt"></i> Logout</span>
            </div>
          </div>
        
        </div>
        </div>
    </div>
  )
}

export default Navbar;
