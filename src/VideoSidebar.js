import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatIcon from "@material-ui/icons/Chat";
import ShareIcon from "@material-ui/icons/Share";
import "./VideoSidebar.css";

function VideoSidebar() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar_button" onClick={() => setLiked(!liked)}>
        <FavoriteIcon style={{ color: liked ? "red" : "white" }} />
        <p>100</p>
      </div>
      <div className="videoSidebar_button">
        <ChatIcon />
        <p>20</p>
      </div>
      <div className="videoSidebar_button">
        <ShareIcon />
        <p>10</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
