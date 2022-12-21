import React from 'react';
import { Link } from 'react-router-dom';

const PopularCourses = () => {
    return (
        <div>
            <p className="text-4xl md:text-5xl font-bold mt-16">Popular Courses</p>
            <div className='mx-10 my-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className="card  bg-base-100 shadow-xl image-full">
                    <figure><img src="https://media.istockphoto.com/photos/python-programming-language-concept-woman-developer-with-her-hand-picture-id1189210101?s=612x612" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Python programming for beginners</h2>
                        <p>Python programming for new programmers. It is a beginner level course. Designed for 9-12 years old kids.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><Link to='/courses'>View More</Link></button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl image-full">
                    <figure><img src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">CSS crash course for all</h2>
                        <p>Modern css course for beginners and intermediate level students. Any one can join, no pre-requisite course needed.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><Link to='/courses'>View More</Link></button>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl image-full">
                    <figure><img src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Learn Android with joe</h2>
                        <p>Android development with modern technonogy. It is a mid-level level course. HTML, php, javascript are pre-requisite for this course.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><Link to='/courses'>View More</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularCourses;