import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="video-header">
      <Link to="/">
        <div className="video-header-title">
          <h1 className="video-title">FootyWorld</h1>
        </div>
      </Link>
      <div className="header-search">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <input type="text" className="search" placeholder="serach for videos" />
      </div>
      <div className="user-profile">
        <i className="fa-solid fa-user"></i>
        <h5 className="profile-name">Hi Guest</h5>
      </div>
    </header>
  );
};

export { Navbar };
