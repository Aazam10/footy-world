import "./Sidebar.css";
const Sidebar = () => {
  return (
    <aside className="video-sidebar">
      <ul className="video-sidebar-items">
        <li className="video-sidebar-item">
          <i class="fa-solid fa-house-chimney"></i>
          <p className="sidebar-item-name">Home</p>
        </li>
        <li className="video-sidebar-item">
          <i class="fa-solid fa-thumbs-up"></i>
          <p className="sidebar-item-name">Liked</p>
        </li>
        <li className="video-sidebar-item">
          <i class="fa-solid fa-bookmark"></i>
          <p className="sidebar-item-name">Watch Later</p>
        </li>
        <li className="video-sidebar-item">
          <i class="fa-solid fa-clock-rotate-left"></i>
          <p className="sidebar-item-name">History</p>
        </li>
        <li className="video-sidebar-item">
          <i className="fa-solid fa-folder-plus"></i>
          <p className="sidebar-item-name">Playlists</p>
        </li>
      </ul>
    </aside>
  );
};

export { Sidebar };
