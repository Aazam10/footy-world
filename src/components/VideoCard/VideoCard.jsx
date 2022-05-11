import "./VideoCard.css";
import { liverpool } from "../../assets";
const VideoCard = ({
  _id,
  title,
  thumbnail,
  videoLength,
  youtubeId,
  viewCount,
  channelName,
  channelImg,
}) => {
  return (
    <div className="video-card">
      <div className="video-card-header">
        <img src={thumbnail} alt={title} className="video-thumbnail" />
        <div className="action-buttons">
          <button className="icon-button">
            <i className="fa-regular fa-thumbs-up"></i>
          </button>
          <button className="icon-button">
            <i className="fa-regular fa-bookmark"></i>
          </button>
          <button className="icon-button">
            <i className="fa-solid fa-folder-plus"></i>
          </button>
        </div>
      </div>
      <div className="video-body">
        <img className="avatar" src={channelImg} alt="" />
        <div className="video-description">
          <p className="video-card-title">{title}</p>
        </div>
      </div>
      <small className="video-channel">{channelName}</small>
    </div>
  );
};

export { VideoCard };
