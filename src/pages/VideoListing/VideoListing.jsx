import "./VideoListing.css";
import { VideoCard } from "../../components";
import axios from "axios";
import { useEffect, useState } from "react";

const VideoListing = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/videos");
        if (response.status === 200) {
          setVideos(response.data.videos);
        } else {
          throw new Error();
        }
      } catch (error) {
        alert(error);
      }
    })();
  }, []);
  return (
    <main className="explore-page">
      <div className="categoris-container"></div>
      <div className="videos-container">
        {
          // videos.length > 0 &&
          videos.map((video) => (
            <VideoCard key={video._id} {...video} />
          ))
        }
      </div>
    </main>
  );
};

export { VideoListing };
