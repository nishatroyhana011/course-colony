import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Authcontext } from '../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {

    const { LoginProvider } = useContext(Authcontext);
    const provider = new GoogleAuthProvider();
    const { userLogin} = useContext(Authcontext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleLogin = (event)=>{
        event.preventDefault();
        userLogin(email, password)
        .then((res=>{
            Swal.fire("Login successfull!");
        }))
        .catch((error=>{
            setError(error.errorMessage)
        }))
    }
    const handleLoginProvider = () => {
        LoginProvider(provider)
            .then((result) => {
                const user = result.user;
                console.log(user)
            }).catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    return (
        <div>
            <form>
                <p className='text-info font-semibold text-2xl m-5'>Login Form</p>
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
                    <button onClick={handleLogin} className="btn btn-info mx-auto my-5">Login</button>
                </div>
                <p className='text-red-600'>Don't have an account? Please <Link className='text-xl' to='/register'>Register</Link></p>
            </form>
            <br />
            <button onClick={handleLoginProvider} className="btn">Sign in with Google</button>
        </div>
    );
};

export default Login;