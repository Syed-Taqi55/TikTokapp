import React from "react";
import "./VideoFooter.css";

function VideoFooter({ username, description, song }) {
  return (
    <div className="videoFooter">
      <h3>@{username}</h3>
      <p>{description}</p>
      <h4>🎵 {song}</h4>
    </div>
  );
}

export default VideoFooter;
