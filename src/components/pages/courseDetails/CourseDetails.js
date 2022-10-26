import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    return (
        <div>
            <div className='flex h-32 bg-slate-100 justify-around items-center'>
                <p className='text-2xl text-purple-800 font-semibold'>{course.title}</p>
                <button className='btn bg-purple-800 text-white'>Download PDF</button>
            </div>
            <div>
                <img className='block mx-auto my-10 rounded-lg' src={course.thumbnail_url} alt="" />
            </div>
            <div className='  flex justify-around'> 
                <div className='flex items-center'>
                    <img className="w-12 m-5 rounded-full" src={course.author?.img} />
                    <div className=''>
                        <p className='text-lg  font-semibold'>{course.author?.name}</p>
                        <p className='text-base'>{course.author?.about}</p>
                    </div>
                </div>
                <div className='text-start'>
                    
                    <p>Rating: {course.rating}</p>
                    <p>Level: {course.level}</p>
                    <p>Number of students: {course.enrolled_students}</p>
                </div>
            </div>
            <div className='my-10'>
                <p>About Course: {course.description}</p>
                <p>Total: {course.others_info?.duration} hours</p>
                <p>Number of quizes: {course.others_info?.total_quiz}</p>
                <p className='text-xl my-5 text-purple-800 font-semibold'>Price: ${course.others_info?.Price} only</p>
            </div>
            <div className='mx-auto w-1/3 my-8 py-8 shadow-md'>
                <p className='text-xl'>topics:</p>
                {Object.keys(course.course_details).map((keyName, i)=>(
                    <li key={i}>
                       {course.course_details[keyName]}
                    </li>
                ))}
                
            </div>
            <div>
            <button className='btn bg-purple-800 text-white'>GET PREMIUM ACCESS</button>
            </div>
        </div>
    );
};

export default CourseDetails;