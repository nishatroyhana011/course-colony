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
                    element:<AllCourses></AllCourses>
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