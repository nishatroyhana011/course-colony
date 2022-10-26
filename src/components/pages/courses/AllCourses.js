import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';

const AllCourses = () => {
    const courses = useLoaderData();
    return (
        <div>
            <div>
                <p>Our Courses</p>
                {
                    courses.map(course => <p> <Link to='/faq'> {course.title} </Link> </p>)
                }
            </div>

        </div>
    );
};

export default AllCourses;