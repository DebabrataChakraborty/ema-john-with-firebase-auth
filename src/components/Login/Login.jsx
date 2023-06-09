import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form>
                <div className="form-control">
                    <lable htmlFor ="email">Email</lable>
                    <input type="email" name="email" id ="" required />
                </div>
                <div className="form-control">
                    <lable htmlFor ="password">Password</lable>
                    <input type="password" name="password" id ="" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>New to Ema-John?<Link to="/signup">Create New Account</Link> </small></p>
        </div>
    );
};

export default Login;