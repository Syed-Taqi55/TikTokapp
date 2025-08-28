import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      if (!formData.username || !formData.email || !formData.password) {
        setMessage("All fields are required for sign up.");
        return;
      }
      // ← here you’d call your /signup API
      setMessage("Sign up successful! Please log in.");
      setIsSignup(false);
      return;
    }

    // LOGIN
    if (!formData.email || !formData.password) {
      setMessage("Email and password are required.");
      return;
    }
    // ← here you’d call your /login API
    setMessage("Login successful! Redirecting...");
    navigate("/videos"); // go to videos
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>{isSignup ? "Sign Up" : "Login"}</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {isSignup && (
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            style={styles.input}
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          {isSignup ? "Sign Up" : "Login"}
        </button>
      </form>

      {message && <p style={styles.message}>{message}</p>}

      <p style={styles.toggleText}>
        {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
        <span
          style={styles.toggleLink}
          onClick={() => {
            setIsSignup((v) => !v);
            setMessage("");
          }}
        >
          {isSignup ? "Login" : "Sign Up"}
        </span>
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  heading: { marginBottom: "20px" },
  form: { display: "flex", flexDirection: "column" },
  input: { marginBottom: "15px", padding: "10px", fontSize: "16px" },
  button: {
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "10px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  message: { marginTop: "15px", color: "green", fontWeight: "bold" },
  toggleText: { marginTop: "15px" },
  toggleLink: { color: "#007BFF", cursor: "pointer", fontWeight: "bold" },
};

export default AuthPage;
