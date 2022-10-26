import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import Course from '../course/Course';

const AllCourses = () => {
    const courses = useLoaderData();
    return (
        <div>
            <p className='text-3xl text-primary font-semibold m-10'>Our Courses</p>
            <div className='flex'>
                <div className='bg-slate-100 px-4 py-8'>
                <p className='text-2xl text-purple-800 font-semibold my-5'>At a glance</p>
                    {
                        courses.map(course => <p className='text-lg'> <Link to={`/courses/${course._id}`}> {course.title} </Link> </p>)
                    }
                </div>
                <div className='grid grid-cols-2 gap-5 container mx-5'>
                    
                    {
                        courses.map(course => <Course key={course._id} course={course}></Course>)
                    }
                </div>
            </div>
            

        </div>
    );
};

export default AllCourses;