import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { _id,title, author, thumbnail_url, description, level } = course;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={thumbnail_url} alt="course" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                    </h2>
                    <div className="badge bg-purple-500 p-3">{level}</div>
                    <p className='text-left'>{description}</p>
                    <div className="card-actions justify-between">
                        <span className='text-purple-800 font-semibold text-lg'>By: {author.name}</span>
                        <button className="btn bg-purple-800 text-white"><Link to={`/courses/${_id}`}>View Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;