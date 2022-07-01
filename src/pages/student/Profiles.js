import Sidebar from "../../components/student/Sidebar"
import Header from "../../components/common/Header"
import PurpleBar from "../../components/common/PurpleBar";
import Spinner from "../../components/common/Spinner";
import Profile from "../../components/student/Profile"
import { useState, useEffect } from "react";
import { useDispatch, connect } from 'react-redux';

import { getProfiles, getTracks, removeProfile, switchProfile } from "../../store/actions";

import { Helmet } from 'react-helmet';

const Profiles = ({ sidebar, darkmode, user, tracks, profiles, currentProfile }) => {
    const dispatch = useDispatch();

    const [spinner, setSpinner] = useState(false);

    const initProfiles = async () => {
        if (tracks.length < 1) {
            setSpinner(true);
            await dispatch(getTracks());
        }
        if (!(Object.keys(user).length === 0) && tracks.length > 0) {
            await dispatch(getProfiles(user.ID));
            setSpinner(false);
        }
    }

    const deleteProfile = async (profile_id) => {
        setSpinner(true);
        await dispatch(removeProfile(user.ID, profile_id));
        setSpinner(false);
    }

    const switchProfileLocal = async (profile_id) => {
        // setSpinner(true);
        await dispatch(switchProfile(user.ID, profile_id));
        // setSpinner(false);
        window.location.reload();
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
                                        <Profile profile={profile} track={tracks.find(track => track.ID === profile.Track_id)} deleteProfile={deleteProfile} switchProfile={switchProfileLocal} current={false} />
                                    </div>
                                )
                            } else {
                                return null;
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      user: state.user,
      darkmode: state.darkmode,
      sidebar: state.sidebar,
      profiles: state.profiles,
      tracks: state.tracks,
      currentProfile: state.currentProfile
    }
  }

export default connect(mapStateToProps)(Profiles);