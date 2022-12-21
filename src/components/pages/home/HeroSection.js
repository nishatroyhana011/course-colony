import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">Course Colony</h1>
                        <p className="mb-5">Quality Education for Everyone from Anywhere</p>
                        <button className="btn btn-primary"><Link to='/courses'>Our Courses</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;