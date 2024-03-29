import Navbar from '../../components/common/Navbar'
import { NavLink, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useRef, useState } from 'react'
import { signup } from '../../store/actions'
import { useDispatch } from 'react-redux'
import Message from '../../components/common/Message'
import Spinner from '../../components/common/Spinner'

const Signup = () => {
  const nav = useNavigate()
  const dispatch = useDispatch()

  const [spinner, setSpinner] = useState(false)

  const name = useRef(null)
  const password = useRef(null)
  const confirmPassword = useRef(null)
  const email = useRef(null)

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

  const passwordMatch = () => {
    password.current.style.boxShadow = 'none'
    confirmPassword.current.style.boxShadow = 'none'
    if (!(password.current.value === confirmPassword.current.value)) {
      password.current.style.boxShadow = '1px 1px 7px #ff000094'
      confirmPassword.current.style.boxShadow = '1px 1px 7px #ff000094'
    }
    return (password.current.value === confirmPassword.current.value)
  }

  const submit = async (e) => {
    e.preventDefault()
    if (!checkEmpty(name) && !checkEmpty(email) && !checkEmpty(password) && !checkEmpty(confirmPassword) && passwordMatch()) {
      const user = {
        full_name: name.current.value,
        email: email.current.value,
        password: password.current.value,
        user_type: 'student'
      }
      setSpinner(true)
      const res = await dispatch(signup(user))
      if (res) {
        nav('/createprofile')
      }
      setSpinner(false)
    }
  }
  return (
        <div className="login lightpurple-bg p-4">
            <Helmet>
                <title>TechPal | Sign Up</title>
            </Helmet>
            <Message />
            <Navbar />
            {spinner ? <Spinner /> : <></>}
            <div className="container mt-5">
                <div className="row align-items-center justify-content-center  ">
                    <div className="col  col-md-8 shadow white-block p-5 ms-5 me-5">
                        <h2 className="text-center mb-5">Create a New Account</h2>
                        <form onSubmit={submit} className='px-5'>
                            <div className="mb-3 row">
                                <label htmlFor="inputName" className="col-md-3   col-form-label fw-bold">Full Name</label>
                                <div className=" col-md-9">
                                <input type="text" placeholder="Full Name" ref={name} className='form-control' onChange={() => { handleChange(name) }} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="inputEmail" className="col-md-3 col-form-label fw-bold">Email</label>
                                <div className="col-md-9">
                                <input type="email" placeholder="Email" ref={email} className='form-control' onChange={() => { handleChange(email) }} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="inputPassword" className="col-md-3 col-form-label fw-bold">Password</label>
                                <div className="col-md-9">
                                <input type="password" placeholder="Password" ref={password} className='form-control' onChange={() => { handleChange(password) }} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="inputConfirmPassword" className="col-md-3 col-form-label fw-bold">Confirm Password</label>
                                <div className="col-md-9">
                                <input type="password" placeholder="Password" ref={confirmPassword} className='form-control' onChange={() => { handleChange(confirmPassword) }} />
                                </div>
                            </div>
                            <div className='d-flex justify-content-center mt-5'>
                              <button className="btn-purple px-5">Sign up</button>
                            </div>
                            <p className=" text-center mt-3  ">Already have an account?   <NavLink to="/login"className=" text-danger">Login</NavLink></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Signup
