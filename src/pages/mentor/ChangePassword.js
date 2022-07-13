import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useRef, useState } from 'react'
import { changePassword } from '../../store/actions'
import { connect, useDispatch } from 'react-redux'
import Message from '../../components/common/Message'
import Spinner from '../../components/common/Spinner'

const ChangePassword = ({ user }) => {
  const nav = useNavigate()
  const dispatch = useDispatch()

  const [spinner, setSpinner] = useState(false)

  const currentPassword = useRef(null)
  const newPassword = useRef(null)
  const confirmPassword = useRef(null)

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
    newPassword.current.style.boxShadow = 'none'
    confirmPassword.current.style.boxShadow = 'none'
    if (!(newPassword.current.value === confirmPassword.current.value)) {
      newPassword.current.style.boxShadow = '1px 1px 7px #ff000094'
      confirmPassword.current.style.boxShadow = '1px 1px 7px #ff000094'
    }
    return (newPassword.current.value === confirmPassword.current.value)
  }

  const submit = async (e) => {
    e.preventDefault()
    if (!checkEmpty(currentPassword) && !checkEmpty(newPassword) && !checkEmpty(confirmPassword) && passwordMatch()) {
      setSpinner(true)
      const payload = {
        current_password: currentPassword.current.value,
        new_password: newPassword.current.value
      }
      const res = await dispatch(changePassword(user.ID, payload))
      setSpinner(false)
      if (res) {
        nav('/home')
      }
    }
  }
  return (
        <div className="login lightpurple-bg p-4">
            <Helmet>
                <title>TechPal | Change Password</title>
            </Helmet>
            <Message />
            {spinner ? <Spinner /> : <></>}
            <div className="container mt-5">
                <div className="row align-items-center justify-content-center">
                    <div className="col  col-md-8 shadow white-block p-5 ms-5 me-5">
                        <h2 className="text-center mb-5">Change Password</h2>
                        <form onSubmit={submit} className='px-5'>
                            <div className="mb-3 row">
                                <label htmlFor="inputPassword" className="col-md-3 col-form-label fw-bold">Current Password</label>
                                <div className="col-md-9">
                                <input type="password" placeholder="Current Password" ref={currentPassword} className='form-control' onChange={() => { handleChange(currentPassword) }} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="inputPassword" className="col-md-3 col-form-label fw-bold">New Password</label>
                                <div className="col-md-9">
                                <input type="password" placeholder="New Password" ref={newPassword} className='form-control' onChange={() => { handleChange(newPassword) }} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="inputConfirmPassword" className="col-md-3 col-form-label fw-bold">Confirm Password</label>
                                <div className="col-md-9">
                                <input type="password" placeholder="Re-Enter Password" ref={confirmPassword} className='form-control' onChange={() => { handleChange(confirmPassword) }} />
                                </div>
                            </div>
                            <div className='d-flex justify-content-center mt-5'>
                              <button className="btn-purple px-5">Confirm</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(ChangePassword)
