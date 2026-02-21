import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const register = async () => {
    try {

      await API.post("/users/add", {
        name,
        email,
        password,
        role: "USER"
      });

      alert("Registration Successful");
      navigate("/login");

    } catch (err) {
      alert("Registration Failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">

        <h2 className="login-title">Register</h2>

        <input
          className="login-input"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="login-input"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="login-input"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-btn" onClick={register}>
          Register
        </button>

      </div>
    </div>
  );
}

export default Register;