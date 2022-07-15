import Navbar from '../../components/common/Navbar'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'

const Landing = () => {
  return (
        <div className="lightpurple-bg login">
        <div className="container-fluied py-4" >

            <Helmet>
                <title>Techie | Home</title>
            </Helmet>
            <Navbar />
            {/* <!-- section home starts --> */}
            <section className="home mb-4">
                <div className="container">
                    <div className="row align-items-center px-5">
                        <div className=" col-12 col-lg-6 p-5">
                            <h2 className=" mb-3 fs-2 h1">Searching For Guidance In Your Computer Science Journey? </h2>
                            <p className=" mb-4 pb-1 fs-5">Look no further! We&apos;ll provide you with all the tools you need to excel in your field!</p>
                            <NavLink to="/signup" className="btn-purple fw-bold">Get Started</NavLink>
                        </div>
                        <div className="  col-12 col-lg-6 p-5">
                            <img src={require('../../assets/img/clip-applying-to-university-online.png')} alt="apply"className=" w-75 m-auto d-block" srcSet=""/>
                        </div>
                    </div>
                    <div className="row p-4 mb-3 shadow white-block mx-3 mt-4">
                        <div className="col-12 col-md-6 col-lg-3    p-4 ">
                            <div className="text-center d-flex flex-column align-items-center justify-content-center">
                                <div className="box d-flex align-items-center justify-content-center  rounded-circle bg-white shadow mb-3">
                                    <img src={require('../../assets/img/Icon metro-books.png')} alt=""/>
                                </div>
                                <h5 className=" mb-3">Course Recommendation</h5>
                                <p>We provide personalized course recommendations based on your profile using machine learning</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3   p-4 ">
                            <div className="text-center d-flex flex-column align-items-center justify-content-center">

                                <div className="box d-flex align-items-center justify-content-center  rounded-circle bg-white shadow mb-3">
                                    <img src={require('../../assets/img/Icon awesome-briefcase.png')} alt=""/>
                                </div>
                                <h5 className=" mb-3">Job Recommendation</h5>
                                <p>We provide personalized job recommendations based on your profile using machine learning</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 p-4 ">
                            <div className="text-center d-flex flex-column align-items-center justify-content-center">
                                <div className="box d-flex align-items-center justify-content-center  rounded-circle bg-white shadow mb-3">
                                    <img src={require('../../assets/img/Icon ionic-md-videocam.png')} alt=""/>
                                </div>
                                <h5 className=" mb-3">Mentorship Sessions</h5>
                                <p>We provide 30 minute 1-on-1 sessions with experts in your domain</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3   p-4 ">
                            <div className="text-center d-flex flex-column align-items-center justify-content-center">
                                <div className="box d-flex align-items-center justify-content-center  rounded-circle bg-white shadow mb-3">
                                    <img src={require('../../assets/img/Icon ionic-md-videocam.png')} alt=""/>
                                </div>
                                <h5 className=" mb-3">Resume Generator</h5>
                                <p>We generate robust and highly customizable resumes based on your profile</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- section home ends --> */}

            {/* <!-- section Get started starts --> */}
            <section className="getStarted-container bg-white">
                <div className="container">
                    <div className="row  align-items-center">
                        <h3 className="text-center mt-5">How To Get Started</h3>
                    </div>
                    <div className="row p-5 pt-1   ">
                        <div className="col-12 col-lg-5 px-5">
                            <img src={require('../../assets/img/get-started.png')} className='getStarted' alt="get started" srcSet=""/>
                        </div>
                        <div className="col-12 col-lg-7  p-5">
                            <div className="row  ">
                                <div className="col mb-3 shadow  rounded-pill bg-white position-relative">
                                    <div className="box position-absolute translate-middle top-50 start-0  bg-violet d-flex align-items-center justify-content-center rounded-circle fs-1 ">1</div>
                                    <div className=" py-4 pe-3 ps-5  ms-3 " >
                                        <h4>Create an Account</h4>
                                        <p>Click on &apos;Get Started&apos;, and sign up to create a new account as a student</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row ms-5 mt-3">
                                <div className="col ms-5  mb-3  shadow rounded-pill bg-white position-relative">
                                    <div className="box position-absolute translate-middle top-50 start-0  bg-violet d-flex align-items-center justify-content-center rounded-circle fs-1 ">2</div>
                                    <div className=" py-4 pe-3 ps-5 ms-3  " >
                                        <h4>Choose a Track</h4>
                                        <p>Create a new profile, and choose the track that
                                            interests you</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col  shadow  rounded-pill bg-white position-relative">
                                    <div className="box position-absolute translate-middle top-50 start-0  bg-violet d-flex align-items-center justify-content-center rounded-circle fs-1 ">3</div>
                                    <div className=" py-4 pe-3 ps-5  ms-3 " >
                                        <h4>Get Started!</h4>
                                        <p>Now you can explore all the features that TechPal offers!</p>
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
                    <div className="row text-center">
                        <h3>Contact Us</h3>
                    </div>
                    <div className="row  align-items-center mt-5">
                        <div className="col-12 col-lg-7  p-5 pb-1 pt-1">
                            <form action="" className='px-4'>
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

                        <div className="col-12 col-lg-5">
                            <img src={require('../../assets/img/contact-us.png')} alt="contact us"className="w-75   m-auto d-block" srcSet=""/>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Section conact us end --> */}
        </div>
    </div>
  )
}

export default Landing
