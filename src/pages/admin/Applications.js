import Sidebar from "../../components/admin/Sidebar"
import Header from "../../components/common/Header"
import PurpleBar from "../../components/common/PurpleBar";
import Spinner from "../../components/common/Spinner";

import { useState } from 'react'
import { connect } from 'react-redux'

import { Helmet } from 'react-helmet';

const Applications = ({ darkmode, sidebar }) => {
    const [spinner, setSpinner] = useState(false);

    const applications = [
        {
            name: 'Samar Ashraf',
            resumeLink: 'https://www.google.com'
        },
        {
            name: 'Neimat Soliman',
            resumeLink: 'https://www.google.com'
        }
    ]

    return (
        <div className={`${darkmode ? "darkgrey-bg" : "grey-bg"}`}>
            <Helmet>
                <title>TechPal | Applications</title>
            </Helmet>
            {spinner ? <Spinner /> : <></>}
            <Sidebar />
            <div className={`content ${sidebar ? "shift": ""}`}>
                <Header />
                <PurpleBar title="Applications" button={false} />
                <div className="container p-5 table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Resume</th>
                                <th>Accept</th>
                                <th>Deny</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {applications.map((application, index) => {
                                return (
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{application.name}</td>
                                        <td><a href={application.resumeLink} className="red-link">View</a></td>
                                        <td>
                                            <button className="btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18.716" height="15.499" viewBox="0 0 18.716 15.499">
                                                    <path id="Icon_awesome-check" data-name="Icon awesome-check" d="M6.357,19.772.274,13.017a1.122,1.122,0,0,1,0-1.47L1.6,10.078a.871.871,0,0,1,1.323,0l4.1,4.55L15.8,4.882a.872.872,0,0,1,1.323,0l1.323,1.47a1.122,1.122,0,0,1,0,1.47L7.68,19.772A.871.871,0,0,1,6.357,19.772Z" transform="translate(0 -4.577)" fill="#02d400"/>
                                                </svg>
                                            </button>
                                        </td>
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

export default connect(mapStateToProps)(Applications);