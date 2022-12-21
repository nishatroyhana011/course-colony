import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Authcontext } from '../../../context/AuthProvider/AuthProvider';

const Checkout = () => {
    const course = useLoaderData();
    const {user} = useContext(Authcontext)

    return (
        <div>
            <p className='text-2xl text-purple-800 font-semibold my-10'>Checkout</p>
            <p className='text-lg font-semibold text-purple-800'>Course info</p>
            <div className="overflow-x-auto">
                <table className="table mx-auto">
                    
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
                <table className="table mx-auto">
                    
                    <tbody>
                        <tr>
                            <td>{user.email}</td>
                           
                        </tr>   
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
};

export default Checkout;