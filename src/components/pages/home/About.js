import React from 'react';

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img className="w-10/12 md:w-full rounded-lg shadow-2xl" src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold">Who We Are?</h1>
                        <p className="py-6">Course colony provides quality courses on modern technology. We have beginner to advanced level course. People of all ages can learn with us. We have 15 instructor, 30 moderator, 25 running courses. More than 3000 students are currently learning.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;