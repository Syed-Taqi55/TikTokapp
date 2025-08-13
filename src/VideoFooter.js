import React from "react";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import "./VideoFooter.css";

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@username</h3>
        <p>Awesome video description!</p>
        <div className="videoFooter_music">
          <MusicNoteIcon />
          <p>Original sound - Artist</p>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
