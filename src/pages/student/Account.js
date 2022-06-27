import Sidebar from "../../components/student/Sidebar";
import Header from "../../components/common/Header";
import PurpleBar from "../../components/common/PurpleBar";
import Spinner from "../../components/common/Spinner";

import { Form } from "react-bootstrap";

import { useDispatch, connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { useRef, useEffect, useState } from 'react';

import { updateStudent } from "../../store/actions";

const Account = ({ user, sidebar, darkmode }) => {
    const [spinner, setSpinner] = useState(false);
    const dispatch = useDispatch();

    const name = useRef(null)
    const about = useRef(null)
    const number = useRef(null)
    const address = useRef(null)
    const university = useRef(null)
    const degree = useRef(null)
    const major = useRef(null)
    const start_year = useRef(null)
    const end_year = useRef(null)
    const portfolio = useRef(null)
    const github = useRef(null)
    const linkedin = useRef(null)

    const setData = () => {
        name.current.value = user.full_name || null;
        about.current.value = user.about || null;
        number.current.value = user.phone || null;
        address.current.value = user.address || null;
        university.current.value = user.university || null;
        degree.current.value = user.degree || null;
        major.current.value = user.major || null;
        start_year.current.value = user.start_year || null;
        end_year.current.value = user.end_year || null;
        portfolio.current.value = user.websites ?  user.websites.portfolio : null;
        github.current.value = user.websites ?  user.websites.github : null;
        linkedin.current.value = user.websites ?  user.websites.linkedin : null;
    }

    const save = async () => {
        name.current.style.boxShadow = "none";
        if (name.current.value !== '') {
            const updatedUser = {
                full_name: name.current.value,
                email: user.email,
                about: about.current.value, // not in backend
                phone: number.current.value,
                address: address.current.value,
                university: university.current.value,
                degree: degree.current.value, // not in backend
                major: major.current.value, // not in backend
                start_year: start_year.current.value, // not in backend
                end_year: end_year.current.value, // not in backend
                websites: {
                    portfolio: portfolio.current.value,
                    github: github.current.value,
                    linkedin: linkedin.current.value,
                }
            }
            setSpinner(true);
            await dispatch(updateStudent(user.User_id, updatedUser));
            setData();
            setSpinner(false);
        } else {
            name.current.style.boxShadow = "1px 1px 7px #ff000094";
        }
    }

    useEffect(() => {
        setData();
    })

    return (
        <div className={`${darkmode ? "darkgrey-bg" : "grey-bg"}`}>
            <Helmet>
                <title>TechPal | Account</title>
            </Helmet>
            {spinner ? <Spinner /> : <></>}
            <Sidebar />
            <div className={`content ${sidebar ? "shift": ""}`}>
                <Header />
                <PurpleBar title="Account Details" button={false} />
                <div className="container p-5">
                    <div className="row">
                        <div className="col-4 col-lg-3 offset-lg-2 text-start mt-2">
                            Full Name <span className="red-link">*</span>
                        </div>
                        <div className="col-8 col-lg-5">
                            <input type="text" ref={name} className="form-control " />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-4 col-lg-3 offset-lg-2 text-start mt-2">
                            About Me
                        </div>
                        <div className="col-8 col-lg-5">
                            <textarea type="text" ref={about} className="form-control " rows="4" />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-4 col-lg-3 offset-lg-2 text-start mt-2">
                            Phone Number
                        </div>
                        <div className="col-8 col-lg-5">
                            <input type="text" ref={number} className="form-control " />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-4 col-lg-3 offset-lg-2 text-start mt-2">
                            Address
                        </div>
                        <div className="col-8 col-lg-5">
                            <input type="text" ref={address} className="form-control " />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-4 col-lg-3 offset-lg-2 text-start mt-2">
                            University
                        </div>
                        <div className="col-8 col-lg-5">
                            <input type="text" ref={university} className="form-control " />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-4 col-lg-3 offset-lg-2 text-start mt-2">
                            Degree Level
                        </div>
                        <div className="col-8 col-lg-5">
                            <Form.Select ref={degree} aria-label="Default select example">
                                <option value="associate">Associate Degree</option>
                                <option value="bachelor">Bachelor's Degree</option>
                                <option value="master">Master's Degree</option>
                                <option value="doctoral">Doctoral's Degree</option>
                            </Form.Select>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-4 col-lg-3 offset-lg-2 text-start mt-2">
                            Field or Major
                        </div>
                        <div className="col-8 col-lg-5">
                            <input type="text" ref={major} className="form-control " />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-5 offset-lg-2">
                            <div className="row">
                                <div className="col-7 me-2 mt-2">
                                    Start Year
                                </div>
                                <div className="col-4 ml-4">
                                    <Form.Select ref={start_year} aria-label="Default select example">
                                        {Array.apply(10, Array(61)).map((x, i) => {
                                            return (
                                                <option key={i + 1980} value={i + 1980}>{i + 1980}</option>
                                            )
                                        })}
                                    </Form.Select>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="row">
                                <div className="col-3 mt-1">
                                    End Year
                                </div>
                                <div className="col-4">
                                    <Form.Select ref={end_year} aria-label="Default select example">
                                        {Array.apply(10, Array(61)).map((x, i) => {
                                            return (
                                                <option key={i + 1980} value={i + 1980}>{i + 1980}</option>
                                            )
                                        })}
                                    </Form.Select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-4 col-lg-3 offset-lg-2 text-start mt-2">
                            Portfolio URL
                        </div>
                        <div className="col-8 col-lg-5">
                            <input type="text" ref={portfolio} className="form-control " />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-4 col-lg-3 offset-lg-2 text-start mt-2">
                            LinkedIn URL
                        </div>
                        <div className="col-8 col-lg-5">
                            <input type="text" ref={linkedin} className="form-control " />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-4 col-lg-3 offset-lg-2 text-start mt-2">
                            Github URL
                        </div>
                        <div className="col-8 col-lg-5">
                            <input type="text" ref={github} className="form-control " />
                        </div>
                    </div>
                    <div className="row mt-5 flex justify-content-center align-items-center">
                        <div className="col-4 col-md-1">
                            <button onClick={save} className="btn-purple">Save</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      user: state.user,
      darkmode: state.darkmode,
      sidebar: state.sidebar,
    }
  }

export default connect(mapStateToProps)(Account);