import "./SingleVideo.css";
import ReactPlayer from "react-player";
const SingleVideo = () => {
  return (
    <main className="single-video-page">
      <div className="single-video-container">
        <div className="video-section">
          <ReactPlayer
            className="video-player"
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=tHbCxwPbJ9c"
          />
        </div>
        <div className="single-video-title">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam totam
          voluptas dolorem aut natus in eveniet beatae, suscipit ea dicta quos
          illo earum accusantium architecto adipisci, hic cum aperiam nobis!
        </div>
        <div className="single-video-details">
          <p className="video-views">1000 views</p>
          <div className="single-video-actions">
            <button className="single-video-icons">
              <i className="fa-regular fa-thumbs-up"></i>
              <p className="icon-description">Like</p>
            </button>
            <button className="single-video-icons">
              <i className="fa-regular fa-bookmark"></i>
              <p className="icon-description">Later</p>
            </button>
            <button className="single-video-icons">
              <i className="fa-solid fa-folder-plus"></i>
              <p className="icon-description">Save</p>
            </button>
          </div>
        </div>
        <div className="video-channel-details">
          <img src="" alt="" />
          <p>channel Name</p>
        </div>
      </div>
    </main>
  );
};

export { SingleVideo };
