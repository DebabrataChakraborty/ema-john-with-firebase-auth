import React,{useContext, useState} from'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';


const SignUp = () => {
    const[error,setError] = useState('');
    const {createUser} = useContext(AuthContext)


    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password,confirm)

        if(password !== confirm){
            setError('Your Password did not matched')
            return
        }
        else if(password.length <8 ){
            setError('password must be 8 character or longer')
            return
        }
        createUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
    }


    return (
        <div className='form-container'>
        <h2 className='form-title'>Sign-Up</h2>
        <form onSubmit={handleSignUp}>
            <div className="form-control">
                <lable htmlFor ="email">Email</lable>
                <input type="email" name="email" id ="" required />
            </div>
            <div className="form-control">
                <lable htmlFor ="password">Password</lable>
                <input type="password" name="password" id ="" required />
            </div>
            <div className="form-control">
                <lable htmlFor ="confirm">Confirm password</lable>
                <input type="password" name="confirm" id ="" required />
            </div>
            <input className='btn-submit' type="submit" value="Sign-Up" />
        </form>
        <p><small>Already have an account?<Link to="/login">Login</Link> </small></p>
        <p className='text-error'>{error}</p>
    </div>
    );
};

export default SignUp;