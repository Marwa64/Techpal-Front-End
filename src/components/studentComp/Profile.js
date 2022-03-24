import Progress from "./Progress"
import { useSelector } from 'react-redux';

const Profile = ({ profile, current }) => {
    return (
        <div className="profile section d-flex flex-column align-items-center pb-4 mt-3" style={{backgroundImage: `linear-gradient(to right, ${profile.color1} , ${profile.color2})`}}>
           <span className="pt-3 mb-4">{profile.trackName}</span>
           <Progress current={profile.level-1} total={profile.totalLevels-1} height="115px" width="115px" cutout={42} />
           {current ? <button className="btn btn-light shadow mb-2">Edit Resume</button> : 
           <div className="row">
               <div className="col-6">
                    <button className="btn btn-light shadow mb-2">Switch To Profile</button>
               </div>
               <div className="col-6">
                    <button className="btn btn-danger shadow mb-2">Remove Resume</button>
               </div>
           </div> }
        </div>
    )
}

export default Profile