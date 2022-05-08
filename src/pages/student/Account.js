import Sidebar from "../../components/layout/Sidebar";
import Header from "../../components/layout/Header";
import PurpleBar from "../../components/layout/PurpleBar";

import { Form } from "react-bootstrap";

import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { useRef } from 'react';

const Account = () => {
    const sidebar = useSelector(state => state.sidebar);
    const darkmode = useSelector(state => state.darkmode);

    const name = useRef(null)
    const about = useRef(null)
    const number = useRef(null)
    const address = useRef(null)
    const university = useRef(null)
    const degree = useRef(null)
    const major = useRef(null)
    const startYear = useRef(null)
    const endYear = useRef(null)
    const portfolio = useRef(null)
    const github = useRef(null)
    const linkedin = useRef(null)

    const save = () => {
        name.current.style.boxShadow = "none";
        if (name.current.value !== '') {
            console.log("Save!")
        } else {
            name.current.style.boxShadow = "1px 1px 7px #ff000094";
        }
    }

    return (
        <div className={`${darkmode ? "darkgrey-bg" : "grey-bg"}`}>
            <Helmet>
                <title>TechPal | Account</title>
            </Helmet>
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
                                    <Form.Select ref={startYear} aria-label="Default select example">
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
                                    <Form.Select ref={endYear} aria-label="Default select example">
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

export default Account;