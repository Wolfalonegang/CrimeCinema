import { Link } from 'react-router-dom';

import './header.scss'
import '../../assets/styles/main.scss'

const Header = () => {
  return (
    <>

      <div className="menu">
        <div className="container">

          <img src="../../assets/images/icons/film-roll.svg" alt=""/>

          <Link to="/" className="menu-links">Home</Link>
          <Link to="/Latest" className="menu-links">Latest Movies</Link>
          <Link to="/TopRated" className="menu-links">Top rated</Link>
          <Link to="/UpComing" className="menu-links">Upcoming movies</Link>
          <Link to="/PopularTv" className="menu-links">Popular TV shows</Link>
        </div>
      </div>

    </>
  );
}

export default Header;