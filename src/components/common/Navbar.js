import { NavLink } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import Logo from './Logo'

const Navbar = () => {
  return (
        <section className="header container bg-white rounded-pill col-11 mb-4 mt-2 ps-3 pe-3 pt-2 pb-2 position-relative">
            <div className="d-flex align-items-center justify-content-between px-3">
                <Logo path={'/'} />
                <div className=" pe-auto fs-4 text-muted d-block  d-md-none me-3" id="menu-btn" role="button" >
                    <i className="fa-solid fa-bars "></i>
                </div>
                <nav className=" text-center fw-bold d-md-block d-none bg-white " >
                    <NavLink className="me-3 text-start  mb-3 mt-3 d-block d-md-inline " to="/">Home</NavLink>
                    <NavLink className="me-3 text-start  mb-3 mt-3 d-block d-md-inline " to="/applymentor">Apply as Mentor</NavLink>
                    <Link className="me-3 text-start  mb-3 mt-3 d-block d-md-inline " to="/#contactUs">Contact Us</Link>
                    <NavLink className="me-3 text-start  mb-3 mt-3 d-block d-md-inline  " to="/login">Login</NavLink>

                </nav>
            </div>
        </section>
  )
}

export default Navbar
