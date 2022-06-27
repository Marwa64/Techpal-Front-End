import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';

const Sidebar = ({ sidebar, darkmode }) => {

    return (
        <div className={`sidebar shadow ${sidebar ? "show": ""} ${darkmode ? "sidebar-dark" : ""}`}>
            <ul className="list-group p-4 pt-5 mt-3">
                <NavLink to="/admin/applications"><li className="list-group-item"><svg className="me-3" xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 16.264 17.433">
                    <path id="Icon_metro-files-empty" data-name="Icon metro-files-empty" d="M20,8.007a15.777,15.777,0,0,0-1.582-1.7A16.2,16.2,0,0,0,16.6,4.825a3,3,0,0,0-1.65-.718H8.274A1.411,1.411,0,0,0,6.822,5.469V18a1.411,1.411,0,0,0,1.452,1.362H19.311A1.411,1.411,0,0,0,20.763,18V9.555c0-.244-.079-.67-.766-1.548Zm-2.4-.927A15.217,15.217,0,0,1,18.91,8.465H16.116V5.845A15.554,15.554,0,0,1,17.593,7.08ZM19.6,18a.286.286,0,0,1-.29.272H8.274A.286.286,0,0,1,7.984,18V5.469a.286.286,0,0,1,.29-.272h6.68V9.01a.564.564,0,0,0,.581.545H19.6ZM14.281,2.646a3,3,0,0,0-1.65-.718H5.951A1.411,1.411,0,0,0,4.5,3.29V15.82A1.389,1.389,0,0,0,5.66,17.154V3.29a.286.286,0,0,1,.29-.272h8.838c-.175-.135-.345-.26-.507-.371Z" transform="translate(-4.499 -1.928)" fill="#403f3f"/></svg>
                Applications</li></NavLink>
                <NavLink to="/admin/tracks"><li className="list-group-item"><svg className="me-3" xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 18.895 13.778">
                    <path id="Icon_metro-profile" data-name="Icon metro-profile" d="M21.116,9.536H19.864V7.75l-2.583-.038.013,1.824H9.532l.053-1.824-2.53.038V9.574L5.777,9.536A1.249,1.249,0,0,0,4.5,10.753v8.514a1.249,1.249,0,0,0,1.278,1.216H21.116a1.249,1.249,0,0,0,1.278-1.216V10.753A1.249,1.249,0,0,0,21.116,9.536ZM17.92,8.32H19.2v2.432H17.92ZM9.612,12.463a1.6,1.6,0,0,1,1.4,1.748,1.6,1.6,0,0,1-1.4,1.748,1.6,1.6,0,0,1-1.4-1.748,1.6,1.6,0,0,1,1.4-1.748ZM7.694,8.32H8.973v2.432H7.694Zm-.852,9.7s.151-1.157.5-1.375a5.1,5.1,0,0,1,1.336-.364s.643.654.916.654.916-.654.916-.654a5.082,5.082,0,0,1,1.336.364c.4.257.506,1.375.506,1.375H6.842Zm13-.576H14.086v-.608h5.752Zm0-1.216H14.086v-.608h5.752Zm0-1.216H14.086V14.4h5.752Zm0-1.216H14.086v-.608h5.752Z" transform="translate(-3.999 -7.204)" fill="none" stroke="#000" strokeWidth="1"/></svg>
                Tracks</li></NavLink>
                <NavLink to="/admin/mentors"><li className="list-group-item"> <svg className="me-3" xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 17.748 10.711">
                    <path id="Icon_material-people-outline" data-name="Icon material-people-outline" d="M14,13.621a10.117,10.117,0,0,0-3.63.765,9.956,9.956,0,0,0-3.63-.765c-1.751,0-5.244.826-5.244,2.486v2.1H19.248v-2.1C19.248,14.447,15.755,13.621,14,13.621Zm-3.227,3.443H2.71v-.956c0-.413,2.065-1.339,4.034-1.339s4.034.926,4.034,1.339Zm7.26,0h-6.05v-.956a1.357,1.357,0,0,0-.419-.933A8.164,8.164,0,0,1,14,14.768c1.968,0,4.034.926,4.034,1.339ZM6.744,12.856a2.757,2.757,0,0,0,2.823-2.678A2.757,2.757,0,0,0,6.744,7.5,2.757,2.757,0,0,0,3.92,10.178,2.757,2.757,0,0,0,6.744,12.856Zm0-4.208a1.532,1.532,0,1,1,0,3.06,1.532,1.532,0,1,1,0-3.06ZM14,12.856a2.757,2.757,0,0,0,2.823-2.678,2.827,2.827,0,0,0-5.647,0A2.757,2.757,0,0,0,14,12.856Zm0-4.208a1.532,1.532,0,1,1-1.613,1.53A1.578,1.578,0,0,1,14,8.648Z" transform="translate(-1.5 -7.5)"/></svg>
                Mentors</li></NavLink>
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        sidebar: state.sidebar,
        darkmode: state.darkmode,
    }
}

export default connect(mapStateToProps)(Sidebar);