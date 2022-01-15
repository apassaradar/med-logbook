import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className="container">
        <div className="information">
            <form action="">
                <center>
                <div className="mb-3">
                    <label className="form-label" htmlFor="username">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="unit">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                    />
                </div>
                <Link to='/overview' class="btn btn-success">
                    Log in
                </Link>
                </center>
            </form>
        </div>
    </div>
  );
};

export default Login;