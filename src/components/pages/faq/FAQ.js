import React from 'react';

const FAQ = () => {
    return (
        <div>
            <div className='flex h-32 bg-slate-100 justify-around items-center'>
                <p className='text-2xl text-purple-800 font-semibold'>Frequently Asked Questions</p>
            </div>
            <div className = 'mx-auto w-11/12 md:w-3/4 lg:1/2 my-10 text-start'>
                <p className='text lg font-semibold'>Q: What is your refund policy?</p>
                <p>A: You have to apply for refund 50% within 72 hours. After course start, we do not refund</p>
                <br />
                <p className='text lg font-semibold'>Q: Can I get lifetime asscee?</p>
                <p>A: Yes, you can. IF you break any rule of our isititute, we can banned you.</p>
                <br />
                <p className='text lg font-semibold'>Q: Do we have any private group for discussion?</p>
                <p>A: Yes we will allow to join after 72 hours.</p>
                <br />
                <p className='text lg font-semibold'>Q: What is your copyright policy?</p>
                <p>A: Copiyng any content is strictly prohibited. You can not share password/any lesson to anyone</p>

            </div>
        </div>
    );
};

export default FAQ;