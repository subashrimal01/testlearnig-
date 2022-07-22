import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Registration/Login";
import Admindashboard from "./AdminDashboard";
import CourseDetail from "./Courses/coursedetail";
import CourseDashboard from "./Courses/coursesdashboard";
import Courses from "./Courses/courses";
import EnrolledCourses from "./Courses/enrolledcourses";
import Home from "./home";
import UserProfile from "./userprofile";
import Editor from "./Code Editor/Editor";
import UserDashboard from "./Users/Userdashboard";
import CoursePayment from "./coursepayment";
import ForgotPassword from "./forgot-password";
import ResetPassword from "./reset-password";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CourseDetailUpdate from "./Courses/courseupdate";
import UserDetailUpdate from "./Users/UserDetailUpdate";
import AddChapter from "./Courses/addChapter";
import CourseAdd from "./Courses/addcourse";

class Mid extends Component{
    render(){

        return(
            <>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<UserProfile/>} />
            <Route path="/courses" element={<Courses/>} />
            <Route path="/courses/:id" element={<CourseDetail/>} />
            <Route path="/courseinsert" element={<CourseAdd/>} />
            <Route path="/admin" element={<Admindashboard/>} />
            <Route path="/admin/users" element={<UserDashboard/>} />
            <Route path="/user/update/:userid" element={<UserDetailUpdate/>} />
            <Route path="/admin/courses" element={<CourseDashboard/>}/>
            <Route path="/course/update/:courseid" element={<CourseDetailUpdate/>} />
            <Route path="/course/addchapter/:id" element={<AddChapter/>} />
            <Route path="/payment" element={<CoursePayment/>}/>
            <Route path="/enrolledcourses" element={<EnrolledCourses/>}/>
            <Route path="/editor" element={<Editor/>}/>
            <Route path="/forgot-password" element={<ForgotPassword/>}/>
            <Route path="/reset-password" element={<ResetPassword/>}/>
            </Routes>
            <ToastContainer autoClose={2000} theme="colored"/>
            </>
        )
    }
}

export default Mid;