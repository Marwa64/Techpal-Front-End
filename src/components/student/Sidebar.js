import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Logo from '../../assets/logo.png'

const Sidebar = () => {
  const sidebar = useSelector(state => state.sidebar)
  const darkmode = useSelector(state => state.darkmode)

  return (
        <div className={`sidebar shadow ${sidebar ? 'show' : ''} ${darkmode ? 'sidebar-dark' : ''}`}>
            <div className='logo-container d-flex flex-column align-items-center px-3'>
                <img className="logo me-1" src={Logo} alt="logo" />
                <h2 className='logo-title'>TechPal</h2>
            </div>
            <ul className="list-group p-4 pt-4 mt-3">
                <NavLink to="/home"><li className="list-group-item"><svg className="me-3" xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 21.167 15.067">
                    <path id="Icon_material-home" data-name="Icon material-home" d="M9.3,17.25v-4.5h3.152v4.5h3.94v-6h2.364L10.879,4.5,3,11.25H5.364v6Z" transform="translate(-0.296 -3.183)" fill="none" stroke="#000" strokeWidth="1.5"/></svg>
                Home</li></NavLink>
                <NavLink to="/profiles"><li className="list-group-item"><svg className="me-3" xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 18.895 13.778">
                    <path id="Icon_metro-profile" data-name="Icon metro-profile" d="M21.116,9.536H19.864V7.75l-2.583-.038.013,1.824H9.532l.053-1.824-2.53.038V9.574L5.777,9.536A1.249,1.249,0,0,0,4.5,10.753v8.514a1.249,1.249,0,0,0,1.278,1.216H21.116a1.249,1.249,0,0,0,1.278-1.216V10.753A1.249,1.249,0,0,0,21.116,9.536ZM17.92,8.32H19.2v2.432H17.92ZM9.612,12.463a1.6,1.6,0,0,1,1.4,1.748,1.6,1.6,0,0,1-1.4,1.748,1.6,1.6,0,0,1-1.4-1.748,1.6,1.6,0,0,1,1.4-1.748ZM7.694,8.32H8.973v2.432H7.694Zm-.852,9.7s.151-1.157.5-1.375a5.1,5.1,0,0,1,1.336-.364s.643.654.916.654.916-.654.916-.654a5.082,5.082,0,0,1,1.336.364c.4.257.506,1.375.506,1.375H6.842Zm13-.576H14.086v-.608h5.752Zm0-1.216H14.086v-.608h5.752Zm0-1.216H14.086V14.4h5.752Zm0-1.216H14.086v-.608h5.752Z" transform="translate(-3.999 -7.204)" fill="none" stroke="#000" strokeWidth="1"/></svg>
                Profiles</li></NavLink>
                <NavLink to="/courses"><li className="list-group-item"> <svg className="me-3" xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 21.922 13.35">
                    <path id="Icon_metro-books" data-name="Icon metro-books" d="M6.833,8.571H3.18a.569.569,0,0,0-.609.513V20.373a.569.569,0,0,0,.609.513H6.833a.569.569,0,0,0,.609-.513V9.085a.569.569,0,0,0-.609-.513ZM6.224,11.65H3.789V10.624H6.224Zm6.7-3.079H9.268a.569.569,0,0,0-.609.513V20.373a.569.569,0,0,0,.609.513h3.653a.569.569,0,0,0,.609-.513V9.085a.569.569,0,0,0-.609-.513Zm-.609,3.079H9.877V10.624h2.435Zm4.815-2.285L13.865,10.75a.48.48,0,0,0-.27.689L19.074,20.6a.668.668,0,0,0,.818.227l3.262-1.385a.48.48,0,0,0,.27-.689L17.945,9.592a.668.668,0,0,0-.818-.227Zm3.1,11.008a.618.618,0,1,1-.609-.513A.567.567,0,0,1,20.227,20.373Z" transform="translate(-2.071 -8.071)" fill="none" stroke="#000" strokeWidth="1"/></svg>
                Courses</li></NavLink>
                <NavLink to="/jobs"><li className="list-group-item"> <svg className="me-3" xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 18.748 12.806">
                    <path id="Icon_awesome-briefcase" data-name="Icon awesome-briefcase" d="M11.092,10.261a.5.5,0,0,1-.555.422H7.21a.5.5,0,0,1-.555-.422V9H0v3.795c0,.675.776,1.265,1.664,1.265h14.42c.887,0,1.664-.59,1.664-1.265V9H11.092ZM16.084,4.78H13.311V3.515c0-.675-.776-1.265-1.664-1.265H6.1c-.887,0-1.664.59-1.664,1.265V4.78H1.664C.776,4.78,0,5.37,0,6.045V8.153H17.748V6.045C17.748,5.37,16.971,4.78,16.084,4.78Zm-4.991,0H6.655V3.937h4.437Z" transform="translate(0.5 -1.75)" fill="none" stroke="#000" strokeWidth="1"/></svg>
                Jobs</li></NavLink>
                <NavLink to="/sessions"><li className="list-group-item"> <svg className="me-3" xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 18.685 11.465">
                    <path id="Icon_awesome-video" data-name="Icon awesome-video" d="M10.264,4.5h-8.8A1.383,1.383,0,0,0,0,5.79v7.785a1.383,1.383,0,0,0,1.459,1.29h8.8a1.383,1.383,0,0,0,1.459-1.29V5.79A1.383,1.383,0,0,0,10.264,4.5Zm5.782,1.018L12.7,7.558v4.249l3.346,2.038a.992.992,0,0,0,1.539-.7V6.214A.993.993,0,0,0,16.046,5.518Z" transform="translate(0.55 -3.95)" fill="none" stroke="#000" strokeWidth="1.1"/></svg>
                Sessions</li></NavLink>
                <NavLink to="/mentors"><li className="list-group-item"> <svg className="me-3" xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 17.748 10.711">
                    <path id="Icon_material-people-outline" data-name="Icon material-people-outline" d="M14,13.621a10.117,10.117,0,0,0-3.63.765,9.956,9.956,0,0,0-3.63-.765c-1.751,0-5.244.826-5.244,2.486v2.1H19.248v-2.1C19.248,14.447,15.755,13.621,14,13.621Zm-3.227,3.443H2.71v-.956c0-.413,2.065-1.339,4.034-1.339s4.034.926,4.034,1.339Zm7.26,0h-6.05v-.956a1.357,1.357,0,0,0-.419-.933A8.164,8.164,0,0,1,14,14.768c1.968,0,4.034.926,4.034,1.339ZM6.744,12.856a2.757,2.757,0,0,0,2.823-2.678A2.757,2.757,0,0,0,6.744,7.5,2.757,2.757,0,0,0,3.92,10.178,2.757,2.757,0,0,0,6.744,12.856Zm0-4.208a1.532,1.532,0,1,1,0,3.06,1.532,1.532,0,1,1,0-3.06ZM14,12.856a2.757,2.757,0,0,0,2.823-2.678,2.827,2.827,0,0,0-5.647,0A2.757,2.757,0,0,0,14,12.856Zm0-4.208a1.532,1.532,0,1,1-1.613,1.53A1.578,1.578,0,0,1,14,8.648Z" transform="translate(-1.5 -7.5)"/></svg>
                Mentors</li></NavLink>
                <NavLink to="/news"><li className="list-group-item"> <svg className="me-3" xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 21.917 15.252">
                    <path id="Icon_awesome-newspaper" data-name="Icon awesome-newspaper" d="M20.046,4.5H3.2a.881.881,0,0,0-.872.891v.3H.872A.881.881,0,0,0,0,6.578v10.1a2.056,2.056,0,0,0,2.034,2.078H19.174a1.763,1.763,0,0,0,1.743-1.782V5.391A.881.881,0,0,0,20.046,4.5ZM2.034,16.971a.294.294,0,0,1-.291-.3v-9.2h.581v9.2A.294.294,0,0,1,2.034,16.971Zm8.57-.594H5.084a.441.441,0,0,1-.436-.445v-.3a.441.441,0,0,1,.436-.445H10.6a.441.441,0,0,1,.436.445v.3A.441.441,0,0,1,10.6,16.377Zm7.553,0h-5.52a.441.441,0,0,1-.436-.445v-.3a.441.441,0,0,1,.436-.445h5.52a.441.441,0,0,1,.436.445v.3A.441.441,0,0,1,18.157,16.377ZM10.6,12.814H5.084a.441.441,0,0,1-.436-.445v-.3a.441.441,0,0,1,.436-.445H10.6a.441.441,0,0,1,.436.445v.3A.441.441,0,0,1,10.6,12.814Zm7.553,0h-5.52a.441.441,0,0,1-.436-.445v-.3a.441.441,0,0,1,.436-.445h5.52a.441.441,0,0,1,.436.445v.3A.441.441,0,0,1,18.157,12.814Zm0-3.563H5.084a.441.441,0,0,1-.436-.445V7.321a.441.441,0,0,1,.436-.445H18.157a.441.441,0,0,1,.436.445V8.805A.441.441,0,0,1,18.157,9.251Z" transform="translate(0.5 -4)" fill="none" stroke="#000" strokeWidth="1"/></svg>
                News</li></NavLink>
            </ul>
        </div>
  )
}

export default Sidebar
