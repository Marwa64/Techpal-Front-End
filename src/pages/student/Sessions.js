import Sidebar from "../../components/student/Sidebar"
import Header from "../../components/common/Header"
import PurpleBar from "../../components/common/PurpleBar";
import Spinner from "../../components/common/Spinner";

import { useState } from 'react'
import { connect } from 'react-redux'

import { Helmet } from 'react-helmet';

const Sessions = ({ darkmode, sidebar }) => {
    const [spinner, setSpinner] = useState(false);

    const sessions = [
        {
            mentor: 'Samar Ashraf',
            date: '3/10/2022',
            time: '02:00 PM',
            link: 'https://www.google.com'
        },
        {
            mentor: 'Neimat Soliman',
            date: '3/10/2022',
            time: '02:00 PM',
            link: 'https://www.google.com'
        }
    ]

    return (
        <div className={`${darkmode ? "darkgrey-bg" : "grey-bg"}`}>
            <Helmet>
                <title>TechPal | Sessions</title>
            </Helmet>
            {spinner ? <Spinner /> : <></>}
            <Sidebar />
            <div className={`content ${sidebar ? "shift": ""}`}>
                <Header />
                <PurpleBar title="Upcoming Sessions" button={true} buttonName="View Completed Sessions" path="/completed-sessions" />
                <div className="container p-5 table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Mentor</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Meeting</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {sessions.map((session, index) => {
                                return (
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{session.mentor}</td>
                                        <td>{session.date}</td>
                                        <td>{session.time}</td>
                                        <td><a href={session.link} className="red-link">Link</a></td>
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

export default connect(mapStateToProps)(Sessions);