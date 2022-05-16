import Progress from "./Progress"
import { useSelector } from 'react-redux';

const Profile = ({ profile, track, current }) => {
    return (
        <>
            {track && profile ? 
                <div className="profile section d-flex flex-column align-items-center pb-4 mt-3" style={{backgroundImage: `linear-gradient(to right, ${track.color1} , ${track.color2})`}}>
                   <span className="pt-3 mb-4">{track.name}</span>
                   <Progress current={profile.level} total={Object.keys(track.skills).length} height="115px" width="115px" cutout={42} />
                   {current ? <button className="btn btn-light shadow mb-2">Edit Resume</button> : 
                   <div className="row">
                       <div className="col-12 col-lg-6">
                            <button className="btn btn-light shadow mb-2">Switch To Profile</button>
                       </div>
                       <div className="col-12 col-lg-6">
                            <button className="btn btn-danger shadow mb-2">Remove Resume</button>
                       </div>
                   </div> }
                </div>
            :
                 <></>
            }
        </>
    )
}

export default Profile