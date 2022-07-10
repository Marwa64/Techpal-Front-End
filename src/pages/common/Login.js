import Navbar from '../../components/common/Navbar'
import { Helmet } from 'react-helmet'
import { useRef, useState } from 'react'
import { login } from '../../store/actions'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import Spinner from '../../components/common/Spinner'
import Message from '../../components/common/Message'

const Login = () => {
  const nav = useNavigate()
  const dispatch = useDispatch()

  const [spinner, setSpinner] = useState(false)

  const email = useRef(null)
  const password = useRef(null)

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
    if (!checkEmpty(email) && !checkEmpty(password)) {
      const user = {
        email: email.current.value,
        password: password.current.value
      }
      setSpinner(true)
      const result = await dispatch(login(user))
      if (result) {
        nav('/')
      }
      setSpinner(false)
    }
  }
  return (
        <div className="login lightpurple-bg p-4">
            <Helmet>
                <title>TechPal | Login</title>
            </Helmet>
            <Message />
            <Navbar />
            {spinner ? <Spinner /> : <></>}
            <div className="container mt-5">
                <div className="row align-items-center justify-content-center">
                    <div className="col col-md-8 shadow white-block p-5 ms-5 me-5">
                        <h2 className="text-center mb-5">Login</h2>
                        <form onSubmit={submit} className='px-5'>
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
                            <div className='d-flex justify-content-center mt-5'>
                              <button className="btn-purple px-5">Login</button>
                            </div>
                            <p className=" text-center mt-3  ">Don&apos;t have an account? <NavLink to="/signup" className=" text-danger">Sign up</NavLink></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Login
