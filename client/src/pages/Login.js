import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className="container">
        <div className="information">
            <form action="">
                <center>
                <div className="mb-3">
                    <label className="form-label" htmlFor="experience">LOG IN</label>
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