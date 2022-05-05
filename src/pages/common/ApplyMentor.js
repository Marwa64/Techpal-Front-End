import Navbar from "../../components/layout/Navbar"
import { Helmet } from 'react-helmet';
import { useRef } from 'react'

const ApplyMentor = () => {

    const name = useRef(null);
    const email = useRef(null);
    const calendly = useRef(null);
    const CV = useRef(null);

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
        if (!checkEmpty(name) && !checkEmpty(email) && !checkEmpty(calendly) && !checkEmpty(CV)) {
            await document.getElementById("mentorForm").submit()
        }
    }

    return (
        <>
            <Helmet>
                <title>Techie | Apply as a Mentor</title>
            </Helmet>
            <Navbar />

            <div className=" container ">
                <div className="row align-items-center justify-content-center  ">
                    <div className="  col  col-md-8  bg-white   shadow-lg  rounded-3 p-5 ms-5 me-5">
                        <h1 className=" h1 text-center mb-5">Application Mentor</h1>
                        <iframe title="dummyframe" id="dummyframe" style={{display: 'none'}}></iframe>
                        <form id="mentorForm" action="http://localhost:5000/api/applymentor/" encType="multipart/form-data" method="POST" onSubmit={submit} >
                            <div className="mb-3 row">
                                <label htmlFor="inputName" className="col-md-3   col-form-label fw-bold">Full Name</label>
                                <div className=" col-md-9">
                                <input type="text" placeholder="Full Name" className="form-control " name="full_name" ref={name} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="inputEmail" className="col-md-3 col-form-label fw-bold">Email</label>
                                <div className="col-md-9">
                                <input type="email" placeholder="Email" className="form-control" name="email" ref={email} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="inputCalendyID" className="col-md-3 col-form-label fw-bold">Calendly ID</label>
                                <div className="col-md-9">
                                <input type="text" placeholder="Calendly ID" className="form-control" name="calendly_id" ref={calendly} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="inputUploadCV" className="col-md-3 col-form-label fw-bold">Upload CV</label>
                                <div className="col-md-9">
                                <input type="file" placeholder="Choose File" className="form-control" name="file" ref={CV} />
                                </div>
                            </div>
                            <button className="btn btn-violet d-block  fw-bold   col-md-6 m-auto mt-5" type="submit">Submit Application</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ApplyMentor;