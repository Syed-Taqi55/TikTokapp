import React, { useState } from "react";
import axios from "axios";
import "./postvideo.css";

function PostPage() {
  const [formData, setFormData] = useState({
    url: "",
    channel: "",
    song: "",
    likes: "",
    messages: "",
    description: "",
    shares: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/v2/posts", formData);
      setStatus("✅ Video posted successfully!");
      setFormData({
        url: "",
        channel: "",
        song: "",
        likes: "",
        messages: "",
        description: "",
        shares: ""
      });
    } catch (error) {
      console.error("Error posting video:", error);
      setStatus("❌ Failed to post video.");
    }
  };

  return (
    <div className="app">
      <h2>📤 Post a New Video</h2>
      <form onSubmit={handleSubmit} className="uploadForm">
        {Object.keys(formData).map((key) => (
          <input
            key={key}
            name={key}
            placeholder={key}
            value={formData[key]}
            onChange={handleChange}
            required
          />
        ))}
        <button type="submit">Submit</button>
      </form>
      {status && <p className="status">{status}</p>}
    </div>
  );
}

export default PostPage;
