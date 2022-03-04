import React, {useState} from "react";
import Axios from "axios";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
        window.localStorage.setItem('username', response.data.username);
        window.localStorage.setItem('role', response.data.role);
        window.location.href = "/overview";
    }).catch(err => {
        window.alert(err.message)
    }) ;
  };

  return (
    <div className="container">
      <div className="information">
        <form action="">
          <center>
            <div className="mb-3">
              <label className="form-label" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="unit">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button onClick={login} class="btn btn-success">
              Log in
            </button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default Login;
