import Sidebar from "../../components/student/Sidebar"
import Header from "../../components/common/Header"
import PurpleBar from "../../components/common/PurpleBar";

import Course from "../../components/student/Course";

import { connect } from "react-redux";

import { Helmet } from 'react-helmet';

const Courses = ({ sidebar, darkmode, currentTrack }) => {

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

    const recommendations = [
        {
            id: "1",
            name: "Course 1",
            rating: 1,
            link: "https://www.google.com",
            img: "https://cdn.elearningindustry.com/wp-content/uploads/2020/08/5-ways-to-improve-your-course-cover-design-1024x575.png"
        },
        {
            id: "2",
            name: "Course 2",
            rating: 5,
            link: "https://www.google.com",
            img: "https://cdn.elearningindustry.com/wp-content/uploads/2020/08/5-ways-to-improve-your-course-cover-design-1024x575.png"
        },
        {
            id: "3",
            name: "Course 3",
            rating: 4,
            link: "https://www.google.com",
            img: "https://cdn.elearningindustry.com/wp-content/uploads/2020/08/5-ways-to-improve-your-course-cover-design-1024x575.png"
        },
        {
            id: "4",
            name: "Course 4",
            rating: 3,
            link: "https://www.google.com",
            img: "https://cdn.elearningindustry.com/wp-content/uploads/2020/08/5-ways-to-improve-your-course-cover-design-1024x575.png"
        },
        {
            id: "5",
            name: "Course 5",
            rating: 5,
            link: "https://www.google.com",
            img: "https://cdn.elearningindustry.com/wp-content/uploads/2020/08/5-ways-to-improve-your-course-cover-design-1024x575.png"
        },
        {
            id: "6",
            name: "Course 6",
            rating: 2,
            link: "https://www.google.com",
            img: "https://cdn.elearningindustry.com/wp-content/uploads/2020/08/5-ways-to-improve-your-course-cover-design-1024x575.png"
        },
    ]

    return (
        <div className={`${darkmode ? "darkgrey-bg" : "grey-bg"}`}>
            <Helmet>
                <title>TechPal | Courses</title>
            </Helmet>
            <Sidebar />
            <div className={`content ${sidebar ? "shift": ""}`}>
                <Header />
                <PurpleBar title={`Course Recommendations for ${currentTrack.name}`} button={true} buttonName="View Completed Courses" path="/completed-courses" />
                <div className="container">
                    <div className="row p-5">
                        <h5>Your Currently Enrolled Courses</h5>
                    </div>
                    <div className="row">
                        {enrolled.map(course => {
                            return (
                                <Course key={course.id} course={course} enrolled={true}/>
                            )
                        })}
                    </div>
                    <div className="row p-5">
                        <h5>Course Recommendations For You</h5>
                    </div>
                    <div className="row">
                        {recommendations.map(course => {
                            return (
                                <Course key={course.id} course={course} enrolled={false} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        sidebar: state.sidebar,
        darkmode: state.darkmode,
        currentTrack: state.currentTrack,
    }
}

export default connect(mapStateToProps)(Courses);