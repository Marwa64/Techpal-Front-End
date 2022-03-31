
const Navbar = () => {
    return (
        <section className="header container bg-white rounded-pill col-11 mb-4  ps-3 pe-3 pt-2 pb-2 position-relative">
            <div className="d-flex align-items-center justify-content-between ">
                <div className="logo">
                    <a href="#" className="logo text-muted ps-3 fs-2">LOGO</a>
                </div>
                <div  className=" pe-auto fs-4 text-muted d-block  d-md-none me-3" id="menu-btn"  role="button" >
                    <i className="fa-solid fa-bars "></i>
                </div>
                <nav className=" text-center fw-bold d-md-block d-none   bg-white " >
                    <a className="me-3 text-start  mb-3 mt-3 d-block d-md-inline " href="index.html">Home</a>
                    <a className="me-3 text-start  mb-3 mt-3 d-block d-md-inline "  href="applyMentor.html">Apply as Mentor</a>
                    <a className="me-3 text-start  mb-3 mt-3 d-block d-md-inline "  href="#">FAQ</a>
                    <a className="me-3 text-start  mb-3 mt-3 d-block d-md-inline "  href="index.html#contactUs">Contact Us</a>
                    <a className="me-3 text-start  mb-3 mt-3 d-block d-md-inline  "  href="Login.html">Login</a>

                </nav>
            </div>
        </section>
    )
}

export default Navbar