import React from 'react';
import Pdf from "react-to-pdf";
import { Link, useLoaderData } from 'react-router-dom';

const ref = React.createRef();

const CourseDetails = () => {
    const course = useLoaderData();
    return (
        <div>
            <div className='flex h-32 bg-slate-100 justify-around items-center'>
                <p className='text-2xl text-purple-800 font-semibold'>{course.title}</p>
                <Pdf targetRef={ref} filename="Course_detail.pdf">
                    {({ toPdf }) => <button onClick={toPdf} className='btn bg-purple-800 text-white'>Download PDF</button>}
                </Pdf>

            </div>

            <div>
                <img className='block mx-auto my-10 rounded-lg' src={course.thumbnail_url} alt="" />
            </div>
            <div className='flex flex-col sm:flex-row justify-around mx-auto bg-slate-100'>
                <div className='flex items-center'>
                    <img className="w-12 m-5 rounded-full" src={course.author?.img} />
                    <div className='text-start'>
                        <p className='text-lg  font-semibold'>{course.author?.name}</p>
                        <p className='text-base'>{course.author?.about}</p>
                    </div>
                </div>
                <div className='text-start p-4'>
                    <p className='text-purple-700 text-lg font-semibold'>Course Info</p>
                    <p>Rating: {course.rating}</p>
                    <p>Level: {course.level}</p>
                    <p>Number of students: {course.enrolled_students}</p>
                </div>
            </div>
            <div className='mx-auto' ref={ref}>
                <div className='my-10'>
                    <p className='text-purple-700 text-lg font-semibold'>Course Name: {course.title}</p>
                    <p>About Course: {course.description}</p>
                    <p>Total: {course.others_info?.duration} hours</p>
                    <p>Number of quizes: {course.others_info?.total_quiz}</p>
                    <p className='text-xl my-5 text-purple-800 font-semibold'>Price: ${course.others_info?.Price} only</p>
                </div>
                <div className='mx-auto w-10/12 sm:w-2/3 md:w-1/3 my-8 p-4 shadow-md text-start'>
                    <p className='text-xl'>topics:</p>
                    {Object.keys(course.course_details).map((keyName, i) => (
                        <li key={i}>
                            {course.course_details[keyName]}
                        </li>
                    ))}
                </div>
            </div>
            <div>
                <button className='btn bg-purple-800 text-white mb-10'><Link to={`/checkout/${course._id}`}>GET PREMIUM ACCESS</Link></button>
            </div>
        </div>
    );
};

export default CourseDetails;