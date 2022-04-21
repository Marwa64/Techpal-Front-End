import Sidebar from "../../layout/Sidebar"
import Header from "../../layout/Header"
import PurpleBar from "../../layout/PurpleBar";
import Profile from "../../studentComp/Profile"
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { Helmet } from 'react-helmet';

const Profiles = () => {
    const sidebar = useSelector(state => state.sidebar);
    const darkmode = useSelector(state => state.darkmode);
    const navigate = useNavigate();

    const currentProfile = {
        id: 1,
        trackName: "Front-End Web Development",
        points: 0,
        level: 1,
        totalLevels: 6,
        color1: "#6B4CE9",
        color2: "#4CA4E9"
    }
    const profiles = [
        {
            id: 2,
            trackName: "Cyber Security",
            points: 100,
            level: 2,
            totalLevels: 5,
            color1: "#70E94C",
            color2: "#D4E94C"
        }
    ]
    return (
        <div className={`${darkmode ? "darkgrey-bg" : "grey-bg"}`}>
            <Helmet>
                <title>Techie | Profiles</title>
            </Helmet>
            <Sidebar />
            <div className={`content ${sidebar ? "shift": ""}`}>
                <Header />
                <PurpleBar title="Your Profiles" button={true} buttonName="Create New Profile" path="/createprofile" />
                <div className="container mt-5">
                    <div className="row text-center">
                        <div className="col-12">
                            <h5>Current Profile</h5>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center text-center">
                        <div className="col-12 col-lg-6">
                            <Profile profile={currentProfile} current={true} />
                        </div>
                    </div>
                    <div className="row mt-4 text-center text-lg-start">
                        <div className="col-12">
                            <h5 className="px-5">Other Profiles</h5>
                        </div>
                    </div>
                    <div className="row d-flex text-center">
                        {profiles.map(profile => {
                            return (
                                <div key={profile.id} className="col-12 col-lg-6">
                                    <Profile profile={profile} current={false} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profiles