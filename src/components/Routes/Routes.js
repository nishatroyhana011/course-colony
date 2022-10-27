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
import NotFound from "../pages/notFound/NotFound";
import Checkout from "../pages/checkout/Checkout";
import PrivateRoute from "./PrivateRoute";

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
                    loader: ()=> fetch('https://course-colony-server.vercel.app/courses'),
                    element:<AllCourses></AllCourses>
                },
                {
                    path: '/courses/:id',
                    loader: ({params})=> fetch(`https://course-colony-server.vercel.app/courses/${params.id}`),
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
                },
                {
                    path: '/checkout/:id',
                    loader: ({params})=> fetch(`https://course-colony-server.vercel.app/checkout/${params.id}`),
                    element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
                },
                {
                    path: '*',
                    element: <NotFound></NotFound>
                }
            ]
        }
])