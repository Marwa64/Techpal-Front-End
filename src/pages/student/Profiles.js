import Sidebar from "../../components/layout/Sidebar"
import Header from "../../components/layout/Header"
import PurpleBar from "../../components/layout/PurpleBar";
import Spinner from "../../components/layout/Spinner";
import Profile from "../../components/student/Profile"
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { getProfiles, getTracks } from "../../store/actions";

import { Helmet } from 'react-helmet';

const Profiles = () => {
    const dispatch = useDispatch();

    const [spinner, setSpinner] = useState(false);

    const sidebar = useSelector(state => state.sidebar);
    const darkmode = useSelector(state => state.darkmode);

    const user = useSelector(state => state.user);
    const currentProfile = useSelector(state => state.currentProfile);
    const tracks = useSelector(state => state.tracks);
    const profiles = useSelector(state => state.profiles);

    const initProfiles = async () => {
        if (tracks.length < 1) {
            setSpinner(true);
            await dispatch(getTracks());
        }
        if (!(Object.keys(user).length === 0) && tracks.length > 0 && (!profiles || profiles.length < 1)) {
            await dispatch(getProfiles(user.ID));
            setSpinner(false);
        }
    }

    useEffect(() => {
        initProfiles();   
    });
    
    return (
        <div className={`${darkmode ? "darkgrey-bg" : "grey-bg"}`}>
            <Helmet>
                <title>TechPal | Profiles</title>
            </Helmet>
            {spinner ? <Spinner /> : <></>}
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
                            <Profile profile={currentProfile} track={tracks.find(track => track.ID === currentProfile.Track_id)} current={true} />
                        </div>
                    </div>
                    <div className="row mt-4 text-center text-lg-start">
                        <div className="col-12">
                            <h5 className="px-5">Other Profiles</h5>
                        </div>
                    </div>
                    <div className="row d-flex text-center">
                        {profiles.map(profile => {
                            if (profile.ID !== currentProfile.ID) {
                                return (
                                    <div key={profile.ID} className="col-12 col-lg-6">
                                        <Profile profile={profile} track={tracks.find(track => track.ID === profiles[0].Track_id)} current={false} />
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profiles