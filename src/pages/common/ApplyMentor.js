import Navbar from '../../components/common/Navbar'
import Spinner from '../../components/common/Spinner'

import { applyMentor } from '../../store/actions'

import { useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet'
import { useRef, useState } from 'react'

const ApplyMentor = () => {
  const dispatch = useDispatch()

  const name = useRef(null)
  const email = useRef(null)
  const calendly = useRef(null)
  const resume = useRef(null)

  const [spinner, setSpinner] = useState(false)

  const handleChange = (ref) => {
    ref.current.style.boxShadow = 'none'
    if (ref.current.value === '') {
      ref.current.style.boxShadow = '1px 1px 7px #ff000094'
    }
  }

  const checkEmpty = (ref) => {
    handleChange(ref)
    return (ref.current.value === '')
  }

  const submit = async (e) => {
    e.preventDefault()
    if (!checkEmpty(name) && !checkEmpty(email) && !checkEmpty(calendly) && !checkEmpty(resume)) {
      const mentor = {
        full_name: name.current.value,
        email: email.current.value,
        calendly_id: calendly.current.value,
        resume: resume.current.value
      }
      setSpinner(true)
      await dispatch(applyMentor(mentor))
      name.current.value = ''
      email.current.value = ''
      calendly.current.value = ''
      resume.current.value = ''
      setSpinner(false)
    }
  }

  return (
        <div className="login lightpurple-bg p-4">
            <Helmet>
                <title>TechPal | Apply as a Mentor</title>
            </Helmet>
            <Navbar />
            {spinner ? <Spinner /> : <></>}
            <div className="container">
                <div className="row align-items-center justify-content-center  ">
                    <div className="  col  col-md-8  bg-white   shadow-lg  rounded-3 p-5 ms-5 me-5">
                        <h1 className=" h1 text-center mb-5">Application Mentor</h1>
                        <form id="mentorForm">
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
                                <label htmlFor="inputCalendyID" className="col-md-3 col-form-label fw-bold">Calendly Event Link</label>
                                <div className="col-md-9">
                                  <input type="text" placeholder="Event Link" className="form-control" name="calendly_id" ref={calendly} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="inputUploadCV" className="col-md-3 col-form-label fw-bold">Resume Link</label>
                                <div className="col-md-9">
                                  <input type="text" placeholder="Resume Link" className="form-control" name="resume" ref={resume} />
                                </div>
                            </div>
                            <button onClick={submit} className="btn btn-violet d-block  fw-bold   col-md-6 m-auto mt-5" type="submit">Submit Application</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ApplyMentor
