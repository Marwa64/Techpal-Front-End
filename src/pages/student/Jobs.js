import Sidebar from "../../components/student/Sidebar"
import Header from "../../components/common/Header"
import PurpleBar from "../../components/common/PurpleBar";

import Job from "../../components/student/Job";

import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { Helmet } from 'react-helmet';

const Jobs = () => {
    const sidebar = useSelector(state => state.sidebar);
    const darkmode = useSelector(state => state.darkmode);

    const currentTrack = useSelector(state => state.currentTrack);
    
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
                <title>TechPal | Jobs</title>
            </Helmet>
            <Sidebar />
            <div className={`content ${sidebar ? "shift": ""}`}>
                <Header />
                <PurpleBar title={`Job Recommendations for ${currentTrack.name}`} button={false} />
                <div className="container mt-5">
                    <div className="row p-5 pt-0">
                        {recommendations.map(course => {
                            return (
                                <Job key={course.id} course={course} enrolled={false} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jobs;