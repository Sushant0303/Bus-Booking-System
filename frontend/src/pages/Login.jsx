import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async () => {
    try {

      const res = await API.post("/users/login", {
        email,
        password,
      });

      // ==========================
      // SAVE USER DATA
      // ==========================
      localStorage.setItem("userId", res.data.id);
      localStorage.setItem("email", res.data.email);

      alert("Login Successful");

      // go to home page
      navigate("/");

    } catch (err) {
      console.log(err);
      alert("Login Failed");
    }
  };

  return (
    
  <div className="login-container">

    <div className="login-box">

      <h2 className="login-title">Login</h2>

      <input
        className="login-input"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="login-input"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="login-btn" onClick={login}>
        Login
      </button>

      <p>
  New user?{" "}
  <span
    style={{ color: "#d84e55", cursor: "pointer" }}
    onClick={() => navigate("/register")}
  >
    Register here
  </span>
</p>

    </div>

  </div>
);
  
}

export default Login;