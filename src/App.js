import React, { useEffect,useState} from "react";
import Videos from "./Videos";
import axios from "axios";
import "./App.css";

function App() {
  const [videos,setVideos]=useState([]);
  useEffect(()=>{
    async function fetchPosts() {
      const response = await axios.get("http://localhost:8080/v2/posts");
      setVideos(response.data);
      return requestAnimationFrame;
    }
    fetchPosts();
  },[]);
  console.log(videos);
  return (
    <div className="app">
      <div className="app__videos">
        <Videos />
        <Videos />
        <Videos />
      </div>
    </div>
  );
}

export default App;
