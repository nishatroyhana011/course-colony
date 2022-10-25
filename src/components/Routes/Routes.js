import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/home/About";
import HeroSection from "../pages/home/HeroSection";
import PopularCourses from "../pages/home/PopularCourses";

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
                }
            ]
        }
])