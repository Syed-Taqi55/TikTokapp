import React, { useEffect, useState } from "react";
import Video from "./Videos";
import axios from "axios";
import "./getVideo.css";

function GetPage() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true); // 👈 Loading state

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get("http://localhost:8080/v2/posts");
        setVideos(response.data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false); // 👈 Stop loading after fetch
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {loading ? (
          <div className="loading">Loading videos...</div> // 👈 Loading UI
        ) : (
          videos.map(({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              key={url} // 👈 Add a key for React list rendering
              url={url}
              username={channel}
              description={description}
              song={song || "Default Song Title"} // 👈 Fallback for missing song
              likes={likes}
              comments={messages}
              shares={shares}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default GetPage;
