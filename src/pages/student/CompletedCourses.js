import Sidebar from "../../components/student/Sidebar"
import Header from "../../components/common/Header"
import PurpleBar from "../../components/common/PurpleBar";

import Course from "../../components/student/Course";

import { Helmet } from 'react-helmet';
import { connect } from "react-redux";

const CompletedCourses = ({ sidebar, darkmode, currentTrack }) => {

    const completed = [
        {
            id: "1",
            name: "Master JavaScript",
            rating: 4,
            link: "https://www.google.com",
            img: "https://cdn.elearningindustry.com/wp-content/uploads/2020/08/5-ways-to-improve-your-course-cover-design-1024x575.png"
        },
    ]

    return (
        <div className={`${darkmode ? "darkgrey-bg" : "grey-bg"}`}>
            <Helmet>
                <title>TechPal | Completed Courses</title>
            </Helmet>
            <Sidebar />
            <div className={`content ${sidebar ? "shift": ""}`}>
                <Header />
                <PurpleBar title={`Completed Courses in ${currentTrack.name}`} button={true} buttonName="View Recommendations" path="/courses" />
                <div className="container">
                    <div className="row p-5">
                        <h5>Your Completed Courses</h5>
                    </div>
                    <div className="row">
                        {completed.map(course => {
                            return (
                                <Course key={course.id} course={course} enrolled={true}/>
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

export default connect(mapStateToProps)(CompletedCourses);