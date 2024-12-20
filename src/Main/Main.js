import NavbarSimple from "../components/Navbar/Navbar"
import Home from "../components/Home/Home"
import Courses from "../components/Courses/Courses"
import Blog from "../components/Blog/Blog"
import {  Route, Routes } from "react-router-dom";
import Blogdetail from "../components/Blog/Blogdetail/Blogdetail";
import About from "../components/About/About";
import Coursedetail from "../components/Coursedetail/Coursedetail";



const Main = () => {
    return (
        <div className="">
            <NavbarSimple />
            <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/blog/detail/:id" element={<Blogdetail/>} />
            <Route path="/courses" element={<Courses/>} />
            <Route path="/course/detail/:id" element={<Coursedetail/>} />
            <Route path="/about" element={<About/>} />

            
            </Routes>
        </div>
    )
}

export default Main