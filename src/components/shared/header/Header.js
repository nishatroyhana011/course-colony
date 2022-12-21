import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../../context/AuthProvider/AuthProvider';
import { themeContext } from '../../../context/theme/ThemeProvider';

const Header = () => {
    const { user, logOut } = useContext(Authcontext);
    const { isChecked, setIsChecked} = useContext(themeContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const handleCheck = (event)=>{
        if(event.target.checked){
            setIsChecked(true)
        }else{
            setIsChecked(false)
        }
    }

    return (
        <div className=''>
            <div className={`navbar ${isChecked ? 'Dark' : 'Light'}`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden m-0 p-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-0 p-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className={`menu ${isChecked ? 'Dark' : 'Light'} menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52`}>
                            <li> <Link to='/' className="text-xl">Home</Link></li>
                            <li><Link to='/courses'>Courses</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/faq'>FAQ</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="normal-case text-xl hidden lg:flex">Course Colony</Link>
                </div>
                {/* for large */}
                
                <div className="navbar-center hidden lg:flex">
                    <ul className={`menu ${isChecked ? 'Dark' : 'Light'} menu-horizontal p-0`}>
                   
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user?.uid ?
                            <>
                                <div className="avatar tooltip tooltip-left" data-tip={user?.displayName}>
                                    <div className="w-12 mx-2 rounded-full ring ring-primary">
                                        <img src={user.photoURL} />
                                    </div>
                                </div>
                                <button className= {`btn btn-outline ${isChecked ? 'btn-Dark' : 'btn-Light'}`} onClick={handleLogOut}>Log out</button>
                            </>
                            :
                            <>
                                <button className={`btn btn-outline ${isChecked ? 'btn-Dark' : 'btn-Light'}`}><Link to='/login'>Login</Link></button>
                            </>
                    }
                </div>
                <div className='mx-0 md:mx-2'>
                <input onClick={handleCheck} type="checkbox" className="toggle" />
                <span>{`${isChecked ? 'Dark' : 'Light'}`}</span>
                </div>
            </div>
        </div>
    );
};

export default Header;