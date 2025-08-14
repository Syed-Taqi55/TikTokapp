import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatIcon from "@material-ui/icons/Chat";
import ShareIcon from "@material-ui/icons/Share";
import "./VideoSidebar.css";

function VideoSidebar({ likes, comments, shares }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar_button" onClick={() => setLiked(!liked)}>
        <FavoriteIcon style={{ color: liked ? "red" : "white" }} />
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar_button">
        <ChatIcon />
        <p>{comments}</p>
      </div>
      <div className="videoSidebar_button">
        <ShareIcon />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
