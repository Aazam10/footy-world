import "../Login/Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../../context";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { authDispatch } = useAuth();
  // console.log(authState);

  const formFieldHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const signupFormHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/signup", user);
      if (response.status === 201) {
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(response.data.createdUser));
        authDispatch({ type: "SIGNUP", payload: response.data });
        setUser({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
        navigate("/");
      } else {
        throw Error();
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="auth-container">
      <section className="auth-card">
        <h2 className="auth-title">Signup</h2>
        <form className="auth-main">
          <div className="auth-main">
            <div className="input-group">
              <label htmlFor="firstname" className="input-label">
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                placeholder="first name"
                className="input"
                name="firstName"
                value={user.firstName}
                onChange={(e) => formFieldHandler(e)}
                required={true}
              />
            </div>
            <div className="input-group">
              <label htmlFor="lastname" className="input-label">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                placeholder="last name"
                className="input"
                name="lastName"
                value={user.lastName}
                onChange={(e) => formFieldHandler(e)}
                required={true}
              />
            </div>
            <div className="input-group">
              <label htmlFor="email" className="input-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="test@gmail.com"
                className="input"
                name="email"
                value={user.email}
                onChange={(e) => formFieldHandler(e)}
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
                  onChange={(e) => formFieldHandler(e)}
                  required
                />
              </div>
            </div>
            <button
              className="btn btn-primary auth-btn"
              onClick={signupFormHandler}
            >
              Create New Account
            </button>
            <div className="auth-link-wrapper">
              <Link to="/login">Already Have An Account</Link>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export { Signup };
