import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/home/About";
import HeroSection from "../pages/home/HeroSection";
import PopularCourses from "../pages/home/PopularCourses";
import AllCourses from "../pages/courses/AllCourses";
import Blog from "../pages/blog/Blog";
import FAQ from "../pages/faq/FAQ";
import Login from "../pages/login/Login"
import Register from "../pages/login/Register";
import CourseDetails from "../pages/courseDetails/CourseDetails";

export const router = createBrowserRouter([
        {
            path: '/',
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    element:[
                        <HeroSection></HeroSection>,
                        <About></About>,
                        <PopularCourses></PopularCourses>
                    ] 
                },
                {
                    path: '/courses',
                    loader: ()=> fetch('http://localhost:5000/courses'),
                    element:<AllCourses></AllCourses>
                },
                {
                    path: '/courses/:id',
                    loader: ({params})=> fetch(`http://localhost:5000/courses/${params.id}`),
                    element:<CourseDetails></CourseDetails>
                },
                {
                    path: '/blog',
                    element: <Blog></Blog>
                },
                {
                    path: '/faq',
                    element: <FAQ></FAQ>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/register',
                    element: <Register></Register>
                }
            ]
        }
])