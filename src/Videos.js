import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import "./Video.css";

// function Video({ url, title, likes, shares, comments }) {
//   const [playing, setPlaying] = useState(false);
//   const videoRef = useRef(null);

//   const handleVideoPress = () => {
//     if (playing) {
//       videoRef.current.pause();
//     } else {
//       videoRef.current.play();
//     }
//     setPlaying(!playing);
//   };

//   return (
//     <div className="video">
//       <video
//         className="video_player"
//         ref={videoRef}
//         onClick={handleVideoPress}
//         loop
//         src={url}
//       />
//       <VideoFooter title={title} />
//       <VideoSidebar likes={likes} shares={shares} comments={comments} />
//     </div>
//   );
// }
function Video({ url, username, description, song, likes, comments, shares }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };
  
  return (
    <div className="video">
      <video 
      className="video_player" 
        ref={videoRef}
        onClick={handleVideoPress}
        loop
        src={url}
/>
      <VideoFooter
        username={username}
        description={description}
        song={song}
      />
      <VideoSidebar
        likes={likes}
        comments={comments}
        shares={shares}
      />
    </div>
  );
}


export default Video;
