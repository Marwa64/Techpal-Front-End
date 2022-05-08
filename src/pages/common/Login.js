import Navbar from "../../components/layout/Navbar"
import { Helmet } from 'react-helmet';
import { useRef, useState } from 'react'
import { login } from '../../store/actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/layout/Spinner";

const Login = () => {
    const nav = useNavigate();
    const dispatch = useDispatch();

    const [spinner, setSpinner] = useState(false);  

    const email = useRef(null)
    const password = useRef(null)

    const handleChange = (ref) => {
        ref.current.style.boxShadow = "none";
        if (ref.current.value === '') {
            ref.current.style.boxShadow = "1px 1px 7px #ff000094";
        }
    }

    const checkEmpty = (ref) => {
        handleChange(ref)
        return (ref.current.value === '')
    }

    const submit = async (e) => {
        e.preventDefault()
        if (!checkEmpty(email) && !checkEmpty(password)) {
            const user = {
                email: email.current.value,
                password: password.current.value
            }
            setSpinner(true);
            await dispatch(login(user))
            setSpinner(false);
            nav('/')
        }
    }
    return (
        <div className="login lightpurple-bg p-4">
            <Helmet>
                <title>TechPal | Login</title>
            </Helmet>
            <Navbar />
            {spinner ? <Spinner /> : <></>}
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col  col-md-8  bg-white   shadow-lg  rounded-3 p-5 ms-5 me-5">
                        <h1 className=" h1 text-center mb-5">Login</h1>
                        <form onSubmit={submit}>
                            <div className="mb-3 row">
                                <label htmlFor="inputEmail" className="col-md-3   col-form-label fw-bold">Email</label>
                                <div className=" col-md-9">
                                <input type="email" placeholder="Email" className="form-control " ref={email} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="inputPassword" className="col-md-3 col-form-label fw-bold">Password</label>
                                <div className="col-md-9">
                                <input type="password" placeholder="Password" className="form-control" ref={password} />
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