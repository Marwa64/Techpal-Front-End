import Layout from "./Layout";
import PurpleBar from "../../components/common/PurpleBar";

import Job from "../../components/student/Job";

import { useState } from 'react'
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";

const Jobs = ({ currentTrack }) => {
    const [spinner, setSpinner] = useState(false);
    
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
        <Layout spinner={spinner} pageName='Jobs'>
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
        </Layout>
    )
}

const mapStateToProps = state => {
    return {
        currentTrack: state.currentTrack,
    }
}

export default connect(mapStateToProps)(Jobs);