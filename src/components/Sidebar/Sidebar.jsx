import "./Sidebar.css";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const getActiveStyle = ({ isActive }) => {
    return { backgroundColor: isActive ? "#4c4c4c" : "" };
  };

  return (
    <aside className="video-sidebar">
      <ul className="video-sidebar-items">
        <NavLink to="/" style={getActiveStyle}>
          <li className="video-sidebar-item">
            <i className="fa-solid fa-house-chimney"></i>
            <p className="sidebar-item-name">Home</p>
          </li>
        </NavLink>
        <NavLink to="/liked" style={getActiveStyle}>
          <li className="video-sidebar-item">
            <i className="fa-solid fa-thumbs-up"></i>
            <p className="sidebar-item-name">Liked</p>
          </li>
        </NavLink>
        <NavLink to="/watchLater" style={getActiveStyle}>
          <li className="video-sidebar-item">
            <i className="fa-solid fa-bookmark"></i>
            <p className="sidebar-item-name">Watch Later</p>
          </li>
        </NavLink>
        <NavLink to="/history" style={getActiveStyle}>
          <li className="video-sidebar-item">
            <i className="fa-solid fa-clock-rotate-left"></i>
            <p className="sidebar-item-name">History</p>
          </li>
        </NavLink>
        <NavLink to="/playlist" style={getActiveStyle}>
          <li className="video-sidebar-item">
            <i className="fa-solid fa-folder-plus"></i>
            <p className="sidebar-item-name">Playlists</p>
          </li>
        </NavLink>
      </ul>
    </aside>
  );
};

export { Sidebar };
