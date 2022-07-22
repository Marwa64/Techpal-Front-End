import Layout from './Layout'
import PurpleBar from '../../components/common/PurpleBar'

import { useDispatch, connect } from 'react-redux'
import { useRef, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { updateMentor } from '../../store/actions'

const Account = ({ user }) => {
  const dispatch = useDispatch()
  const [spinner, setSpinner] = useState(false)

  const name = useRef(null)
  const about = useRef(null)
  const calendly = useRef(null)

  const setData = () => {
    name.current.value = user.full_name || null
    about.current.value = user.about || null
    calendly.current.value = user.calendly_id || null
  }

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

  const save = async () => {
    if (!checkEmpty(name) && !checkEmpty(calendly)) {
      setSpinner(true)
      const updatedUser = {
        full_name: name.current.value,
        email: user.email,
        about: about.current.value,
        calendly_id: calendly.current.value
      }
      await dispatch(updateMentor(user.User_id, updatedUser))
      setSpinner(false)
    }
  }

  useEffect(() => {
    setData()
  })

  return (
        <Layout spinner={spinner} pageName='Account'>
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
                      Calendly Event Link <span className="red-link">*</span>
                    </div>
                    <div className="col-8 col-lg-5">
                        <input type="text" ref={calendly} className="form-control " />
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-5">
                      <NavLink to="/changepassword" className='no-underline purple'>
                        Change Password
                      </NavLink>
                </div>
                <div className="row mt-5 flex justify-content-center align-items-center me-4">
                    <div className="col-4 col-md-1">
                        <button onClick={save} className="btn-purple">Save</button>
                    </div>

                </div>
            </div>
        </Layout>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Account)
