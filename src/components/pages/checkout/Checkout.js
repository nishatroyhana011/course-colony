import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    return (
        <div>
            <p className='text-2xl text-purple-800 font-semibold my-10'>Checkout</p>
            <p className='text-lg font-semibold text-purple-800'>Course info</p>
            <div className="overflow-x-auto">
                <table className="table w-1/2 mx-auto">
                    
                    <thead>
                        <tr>
                            <th>Course Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{course.title}</td>
                            <td>${course.others_info?.Price}</td>
                        </tr>   
                    </tbody>
                </table>
            </div>
            <div>
                <br />
                <p className='text-lg font-semibold text-purple-800'>Student info</p>
            <div className="overflow-x-auto">
                <table className="table w-1/2 mx-auto">
                    <thead>
                        <tr>
                            <th>Course Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                </table>
            </div>
            </div>
        </div>
    );
};

export default Checkout;