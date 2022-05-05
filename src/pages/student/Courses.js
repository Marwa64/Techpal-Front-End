import Sidebar from "../../components/layout/Sidebar"
import Header from "../../components/layout/Header"
import PurpleBar from "../../components/layout/PurpleBar";

import Course from "../../components/student/Course";

import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { Helmet } from 'react-helmet';

const Courses = () => {
    const sidebar = useSelector(state => state.sidebar);
    const darkmode = useSelector(state => state.darkmode);
    const navigate = useNavigate();

    const enrolled = [
        {
            id: "1",
            name: "Master JavaScript",
            rating: 4,
            link: "https://www.google.com",
            img: "https://cdn.elearningindustry.com/wp-content/uploads/2020/08/5-ways-to-improve-your-course-cover-design-1024x575.png"
        },
        {
            id: "2",
            name: "HTML & CSS",
            rating: 5,
            link: "https://www.google.com",
            img: "https://cdn.elearningindustry.com/wp-content/uploads/2020/08/5-ways-to-improve-your-course-cover-design-1024x575.png"
        },
    ]

    return (
        <div className={`${darkmode ? "darkgrey-bg" : "grey-bg"}`}>
            <Helmet>
                <title>Techie | Courses</title>
            </Helmet>
            <Sidebar />
            <div className={`content ${sidebar ? "shift": ""}`}>
                <Header />
                <PurpleBar title="Course Recommendations for Front-End Web Development" button={true} buttonName="View Completed Courses" path="/completed-courses" />
                <div className="container">
                    <div className="row p-5">
                        <h5>Your Currently Enrolled Courses</h5>
                    </div>
                    <div className="row">
                        {enrolled.map(course => {
                            return (
                                <Course key={course.id} course={course} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses;