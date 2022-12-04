import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Authcontext } from '../../../context/AuthProvider/AuthProvider';
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    const navigate = useNavigate();
    const { LoginProvider, FBLoginProvider } = useContext(Authcontext);
    const provider = new GoogleAuthProvider();
    const fbProvider = new FacebookAuthProvider();
    const { userLogin } = useContext(Authcontext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleLogin = (event) => {
        event.preventDefault();
        userLogin(email, password)
            .then((res => {
                Swal.fire("Login successfull!");
                navigate(from, { replace: true });
            }))
            .catch((error => {
                setError(error.errorMessage)
                Swal.fire('Email address or password missmatched')
            }))
    }
    const handleLoginProvider = () => {
        LoginProvider(provider)
            .then((result) => {
                Swal.fire("Login successfull!");
                navigate(from, { replace: true });
            }).catch((error) => {

                const errorMessage = error.message;
                setError(errorMessage)
        });
    }

    const handleFBLoginProvider = () => {
        FBLoginProvider(fbProvider)
            .then((result) => {
                Swal.fire("Login successfull!");
                navigate(from, { replace: true });
            }).catch((error) => {

                const errorMessage = error.message;
                setError(errorMessage)
        });
    }

    return (
        <div className='my-6'>
            <form>
                <p className='text-primary font-semibold text-2xl m-5'>Login Form</p>
                <p className='text-red-600'>{error}</p>
                <div className='mx-auto container' action="">
                    <div className="form-control mx-auto  w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email adderss</span>
                        </label>
                        <input onBlur={handleEmail} type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control mx-auto  w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input onBlur={handlePassword} type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <button onClick={handleLogin} className="btn btn-outline btn-primary mx-auto my-5">Login</button>
                </div>
                <p className='text-red-600'>Don't have an account? Please <Link className='text-xl' to='/register'>Register</Link></p>
            </form>
            <br />
            <div className="flex flex-col w-full border-opacity-50">
                
                <div className="divider">OR</div>
                
            </div>
            <button onClick={handleLoginProvider} className="btn btn-outline btn-primary mx-2">Sign in with Google</button>
            <button onClick={handleFBLoginProvider} className="btn btn-outline btn-primary mx-2">Sign in with Facebook</button>
        </div>
    );
};

export default Login;