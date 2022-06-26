import Sidebar from "../../components/student/Sidebar"
import Header from "../../components/layout/Header"
import PurpleBar from "../../components/layout/PurpleBar";
import Spinner from "../../components/layout/Spinner";

import { useState } from 'react'
import { connect } from 'react-redux'

import { Helmet } from 'react-helmet';

const Mentors = ({ darkmode, sidebar }) => {
    const [spinner, setSpinner] = useState(false);

    const mentors = [
        {
            name: 'Samar Ashraf',
            profile: 'https://www.google.com',
            book: 'https://www.google.com',
        },
        {
            name: 'Neimat Soliman',
            profile: 'https://www.google.com',
            book: 'https://www.google.com',
        }
    ]

    return (
        <div className={`${darkmode ? "darkgrey-bg" : "grey-bg"}`}>
            <Helmet>
                <title>TechPal | Mentors</title>
            </Helmet>
            {spinner ? <Spinner /> : <></>}
            <Sidebar />
            <div className={`content ${sidebar ? "shift": ""}`}>
                <Header />
                <PurpleBar title="List of Mentors" button={false} />
                <div className="container p-5 sessions">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Profile</th>
                                <th>Book Session</th>
                                <th>Report</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {mentors.map((mentor, index) => {
                                return (
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{mentor.name}</td>
                                        <td><a href={mentor.profile} className="red-link">View</a></td>
                                        <td><a href={mentor.book} className="red-link">Book</a></td>
                                        <td>
                                            <button className="btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="13.426" height="13.423" viewBox="0 0 13.426 13.423">
                                                    <path id="Icon_ionic-ios-close" data-name="Icon ionic-ios-close" d="M19.589,18l4.8-4.8A1.124,1.124,0,0,0,22.8,11.616l-4.8,4.8-4.8-4.8A1.124,1.124,0,1,0,11.616,13.2l4.8,4.8-4.8,4.8A1.124,1.124,0,0,0,13.2,24.384l4.8-4.8,4.8,4.8A1.124,1.124,0,1,0,24.384,22.8Z" transform="translate(-11.285 -11.289)"/>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        darkmode: state.darkmode,
        sidebar: state.sidebar,
    }
}

export default connect(mapStateToProps)(Mentors);