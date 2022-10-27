import React ,{useContext} from 'react';
import { themeContext } from '../../../context/theme/ThemeProvider';

const Blog = () => {
    const { isChecked } = useContext(themeContext);
    return (
        <div className={`${isChecked ? 'Dark' : 'Light' }`}>
            <div className='flex h-32 bg-slate-100 justify-around items-center'>
                <p className='text-2xl text-purple-800 font-semibold'>Blog Section</p>
            </div>
            <div className='container mx-auto my-8'>
                <div className='flex my-4'>
                    <img className='w-1/2' src='http://definitiontech.co/wp-content/uploads/2018/06/CORS_SameOrginPolicy-768x342.jpg'></img>
                    <div className='w-2/3 text-left mx-5'>
                        <p className='text lg font-semibold'>What is CORS?</p>
                        <p>“CORS” stands for Cross-Origin Resource Sharing. It allows us to make requests from one website to another website in the browser,
                             which is normally prohibited by another browser policy called the Same-Origin Policy (SOP). CORS and SOP are both browser policies that have developed in response to issues of browser security and vulnerabilities.</p>
                    </div>
                </div>

                <div className='flex my-4'>
                    <img className='w-1/2' src='https://crowdbotics.ghost.io/content/images/2019/07/react-router.jpg'></img>
                    <div className='w-2/3 text-left mx-5'>
                        <p className='text lg font-semibold'>How does the private route work?</p>
                        <p>In a provate route, A component/page is given as childern. In route file, we wrap that component with 'PrivateRoute' tag. Then we check, if the user is logged in or not.
                             If Current user is logged in, we allow user to visit the protected page. Otherwise, we redirect user to login page. </p>
                    </div>
                </div>

                <div className='flex my-4'>
                    <img className='w-1/2' src='https://res.cloudinary.com/practicaldev/image/fetch/s--XnV7nLnZ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/cufhvx44o66bb32ll2l8.png'></img>
                    <div className='w-2/3 text-left mx-5'>
                        <p className='text lg font-semibold'>Why are you using firebase? What other options do you have to implement authentication?</p>
                        <p>Firebase provides us user authentication and authorization system. We can log in via google, facebook, github etc in any web application. firebase provides us that platform. It also provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to an app. </p>
                    </div>
                </div>

                <div className='flex my-4'>
                    <img className='w-1/2' src='https://www.section.io/engineering-education/history-of-nodejs/nodejs-use-cases-cover-image.png'></img>
                    <div className='w-2/3 text-left mx-5'>
                        <p className='text lg font-semibold'>What is Node? How does Node work?</p>
                        <p>Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser.
                        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code.
                        </p>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Blog;