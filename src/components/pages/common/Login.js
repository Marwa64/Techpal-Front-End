import Navbar from "../../layout/Navbar"
import { Helmet } from 'react-helmet';

const Login = () => {
    const login = (e) => {
        e.preventDefault();
        console.log("log in")
    }
    return (
        <div className="login lightpurple-bg p-4">
            <Helmet>
                <title>Career Guidance | Login</title>
            </Helmet>
            <Navbar />
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col  col-md-8  bg-white   shadow-lg  rounded-3 p-5 ms-5 me-5">
                        <h1 className=" h1 text-center mb-5">Login</h1>
                        <form onSubmit={login}>
                            <div className="mb-3 row">
                                <label htmlFor="inputEmail" className="col-md-3   col-form-label fw-bold">Email</label>
                                <div className=" col-md-9">
                                <input type="email" placeholder="Email" className="form-control " id="inputEmail" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="inputPassword" className="col-md-3 col-form-label fw-bold">Password</label>
                                <div className="col-md-9">
                                <input type="password" placeholder="Password" className="form-control" id="inputPassword" />
                                </div>
                            </div>
                            <button className="btn btn-violet d-block  fw-bold   col-md-6  m-auto mt-5"  >Login</button>
                            <p className=" text-center mt-3  ">Don't have an account? <a href="signup.html" className=" text-danger">Sign up</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login