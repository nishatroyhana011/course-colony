import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../../context/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, userUpdate} = useContext(Authcontext);
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleName = (event) => {
        setName(event.target.value)
    }
    const handlePhoto = (event) => {
        setPhoto(event.target.value)
    }
    const handleEmail = (event) => {
        if (/\S+@\S+\.\S+/.test(event.target.value)) {
            setEmail(event.target.value)
        }else{
            setError('please Enter valid Email')
        }
    }
    const handlePassword = (event) => {
        if(/^(((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/.test(event.target.value)){
            setPassword(event.target.value)
        }else{
            setError('please Enter password containing 8 charactars or more')
        }  
    }
    const handleRegister = (event)=>{
        event.preventDefault();
        if(name && photo && email && password){
            createUser(email, password)
            .then((res)=>{
                //const user = res.user;
                userUpdate(name, photo)
            })
            .catch((error)=>{
                console.log(error.errorMessage)
            })
        }else{
            setError('Email or password missing')
        }
    }
    
    return (
        <form>
            <p className='text-info font-semibold text-2xl m-5'>Registration form</p>
            <p className='text-red-600'>{error}</p>
            <div className='mx-auto container' action="">
                <div className="form-control mx-auto  w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your full name</span>
                    </label>
                    <input onBlur={handleName} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" required/>
                </div>
                <div className="form-control mx-auto  w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo url</span>
                    </label>
                    <input onBlur={handlePhoto} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control mx-auto  w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email adderss</span>
                    </label>
                    <input onBlur={handleEmail} type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" required/>
                </div>
                <div className="form-control mx-auto  w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input onBlur={handlePassword} type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" required/>
                </div>
                <button onClick={handleRegister} className="btn btn-info mx-auto my-5">Register</button>
            </div>
            <p className='text-red-600'>Already have an account? Please <Link to='/login'>Login</Link></p>
        </form>
    );
};

export default Register;