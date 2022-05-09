import Navbar from "../../components/layout/Navbar"
import { Helmet } from 'react-helmet';
import { NavLink } from "react-router-dom";

const Landing = ()=>{
    return (
        <div className="lightpurple-bg login">
        <div className="container-fluied  p-4   " >
            
            <Helmet>
                <title>Techie | Home</title>
            </Helmet>
            <Navbar />
            {/* <!-- section home starts --> */}
            <section className="home mb-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className=" col-12 col-lg-6 p-5">
                            <h2 className=" mb-3 fs-2 h1">Searching For Guidance In Your Computer Science Journey? </h2>
                            <p className=" mb-3 fs-5">Look no further! We'll provide you with all the tools you need to excel in your field!</p>
                            <NavLink to="/signup" className="btn btn-violet  fw-bold">Get Started</NavLink>
                        </div>
                        <div className="  col-12 col-lg-6 p-5">
                            <img  src={require("../../assets/img/clip-applying-to-university-online.png")} alt="apply"className=" w-75 m-auto d-block" srcSet=""/>
                        </div>
                    </div>
                    <div className="row rounded-3 p-4 mb-3 shadow bg-white">
                        <div className="col-12 col-md-6 col-lg-3    p-4 ">
                            <div className="text-center d-flex flex-column align-items-center justify-content-center">
                                <div className="box d-flex align-items-center justify-content-center  rounded-circle bg-white shadow mb-3">
                                    <img src={require("../../assets/img/Icon metro-books.png")} alt=""/>
                                </div>
                                <h4 className=" mb-3">Course Recommendation</h4>
                                <p>We provide personalized course recommendations based on your profile using machine learning</p>
                            </div>
                        </div>
                        
                        <div className="col-12 col-md-6 col-lg-3   p-4 ">
                            <div className="text-center d-flex flex-column align-items-center justify-content-center">
                            
                                <div className="box d-flex align-items-center justify-content-center  rounded-circle bg-white shadow mb-3">
                                    <img src={require("../../assets/img/Icon awesome-briefcase.png")} alt=""/>
                                </div>
                                <h4 className=" mb-3">Job Recommendation</h4>
                                <p>We provide personalized job recommendations based on your profile using machine learning</p>
                            </div>
                        </div>
                        
                        <div className="col-12 col-md-6 col-lg-3 p-4 ">
                            <div className="text-center d-flex flex-column align-items-center justify-content-center">
                                <div className="box d-flex align-items-center justify-content-center  rounded-circle bg-white shadow mb-3">
                                    <img src={require("../../assets/img/Icon ionic-md-videocam.png")} alt=""/>
                                </div>
                                <h4 className=" mb-3">Mentorship Sessions</h4>
                                <p>We provide 30 minute 1-on-1 sessions with experts in your domain</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3   p-4 ">
                            <div className="text-center d-flex flex-column align-items-center justify-content-center">
                                <div className="box d-flex align-items-center justify-content-center  rounded-circle bg-white shadow mb-3">
                                    <img src={require("../../assets/img/Icon ionic-md-videocam.png")} alt=""/>
                                </div>
                                <h4 className=" mb-3">Resume Generator</h4>
                                <p>We generate robust and highly customizable resumes based on your profile</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- section home ends --> */}
            
            {/* <!-- section Get started starts --> */}
            <section className=" bg-white">
                <div className="container">
                    <div className="row  align-items-center">
                        <h2 className=" text-muted text-center h2 mt-5">How To Get Started</h2>
                    </div>
                    <div className="row p-5 pt-1   ">
                        <div className="col-12 col-lg-6  p-5">
                            <img src={require("../../assets/img/get-started.png")} alt="get started" srcSet=""/>
                        </div>
                        <div className="col-12 col-lg-6  p-5">
                            <div className="row  ">
                                <div className="col mb-3 shadow  rounded-pill bg-white position-relative">
                                    <div className="box position-absolute translate-middle top-50 start-0  bg-violet d-flex align-items-center justify-content-center rounded-circle fs-1 ">1</div>
                                    <div className=" p-4 ps-5  " >
                                        <h3>Create an Account</h3>
                                        <p>Click on 'Get Started', and enter your information and wait for the confirmation email</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col mb-3  shadow rounded-pill bg-white position-relative">
                                    <div className="box position-absolute translate-middle top-50 start-0  bg-violet d-flex align-items-center justify-content-center rounded-circle fs-1 ">2</div>
                                    <div className=" p-4 ps-5  " >
                                        <h3>Choose a Track</h3>
                                        <p>Create a new profile, and choose the track that
                                            interests you</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col  shadow  rounded-pill bg-white position-relative">
                                    <div className="box position-absolute translate-middle top-50 start-0  bg-violet d-flex align-items-center justify-content-center rounded-circle fs-1 ">3</div>
                                    <div className=" p-4 ps-5  " >
                                        <h3>Get Started!</h3>
                                        <p>Now you can explore all the features that Career
                                            Guidance offers!</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- section Get started ends --> */}

            {/* <!-- Section conact us start --> */}
            <section id="contactUs " className="pt-5">
                <div className="container">
                    <div className="row text-center h2 text-muted">
                        <h2>Contact Us</h2>
                    </div>
                    <div className="row  align-items-center">
                        <div className="col-12 col-lg-6  p-5 pb-1 pt-1">
                            <form action="">
                                <div className=" row">
                                    <div className=" col-sm-6 col-xs-12  mb-3 ">
                                        <input type="text" placeholder="First Name" className="form-control " />
                                    </div>
                                    <div className=" col-sm-6 col-xs-12 mb-3 ">
                                        <input type="text" placeholder="Last Name" className="form-control " />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className=" col">
                                        <input type="email" placeholder="Email" className="form-control " />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className=" col">
                                        <textarea placeholder="Your Message" name="" id="" cols="30" rows="10" className=" form-control"></textarea>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <div className=" col">
                                        <input type="submit" value="Send" className="form-control btn btn-violet fw-bold " />
                                    </div>
                                </div>
                            </form>
                        </div>
                            
                        
                        <div className="  col-12 col-lg-6 p-5 pb-1 pt-1 ">
                            <img src={require("../../assets/img/contact-us.png")} alt="contact us"className="w-75   m-auto d-block" srcSet=""/>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Section conact us end --> */}
        </div>
         <footer className="w-100   bg-violet "></footer>
        </div>
        
    )

}

export default Landing;

