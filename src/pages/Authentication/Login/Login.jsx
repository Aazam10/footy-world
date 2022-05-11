import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../../context";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const guestUser = {
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
  };

  const [user, setUser] = useState({ email: "", password: "" });

  const { authDispatch } = useAuth();

  const guestBtnClickHandler = (e) => {
    e.preventDefault();
    setUser(guestUser);
  };

  const loginFieldChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginFormHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", user);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(response.data.foundUser));
        authDispatch({ type: "LOGIN", payload: response.data });
        setUser({ email: "", password: "" });
        navigate("/");
      } else if (response.status === 401) {
        throw new Error("Incorrect password");
      } else if (response.status === 404) {
        throw new Error("User Does not Exist");
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="auth-container">
      <section className="auth-card">
        <h2 className="auth-title">Login</h2>
        <form className="auth-main">
          <div className="input-group">
            <label htmlFor="email" className="input-label">
              Email Address
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="test@gmail.com"
              className="input"
              value={user.email}
              onChange={loginFieldChangeHandler}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <div className="input-wrapper">
              <input
                id="password"
                placeholder="*********"
                className="input"
                name="password"
                value={user.password}
                onChange={loginFieldChangeHandler}
                required
              />
            </div>
          </div>

          <button
            className="btn btn-primary auth-btn"
            onClick={loginFormHandler}
          >
            Login
          </button>
          <button
            className="btn btn-primary guest-btn"
            onClick={guestBtnClickHandler}
          >
            Guest Credentials
          </button>
          <div className="auth-link-wrapper">
            <Link to="/signup">Create New Account</Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export { Login };
