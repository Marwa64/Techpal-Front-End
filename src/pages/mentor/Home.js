import Layout from './Layout'
import PurpleBar from '../../components/common/PurpleBar'

import { connect, useDispatch } from 'react-redux'

import { getMentorSessions, addSession, removeSession } from '../../store/actions'

import { useState, useEffect, useRef } from 'react'

const Home = ({ user, darkmode, sessions }) => {
  const dispatch = useDispatch()
  const [spinner, setSpinner] = useState(false)

  const name = useRef(null)
  const date = useRef(null)
  const time = useRef(null)
  const link = useRef(null)

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

  const add = async () => {
    if (!checkEmpty(name) && !checkEmpty(date) && !checkEmpty(time) && !checkEmpty(link)) {
      setSpinner(true)
      const session = {
        session_name: name.current.value,
        date: date.current.value,
        time: time.current.value,
        meeting_link: link.current.value
      }
      await dispatch(addSession(user.ID, session))
      name.current.value = ''
      date.current.value = ''
      time.current.value = ''
      link.current.value = ''
      setSpinner(false)
    }
  }

  const remove = async (sessionId) => {
    setSpinner(true)
    await dispatch(removeSession(sessionId))
    setSpinner(false)
  }

  useEffect(async () => {
    setSpinner(true)
    await dispatch(getMentorSessions(user.ID))
    setSpinner(false)
  }, [])

  return (
        <Layout spinner={spinner} pageName='Sessions'>
            <PurpleBar title={`Welcome Back ${user.full_name}!`} button={false} />
            <div className="container px-0 mt-3">
                <div className="row">
                    <div className="col-8 offset-2">
                        <div className={`section overlap shadow d-flex flex-column ${darkmode ? 'sidebar-dark' : ''}`}>
                            <div className="row justify-content-center">
                              <h5>Add Public Session</h5>
                            </div>
                            <div className="row mt-4 px-5">
                                <div className="col-4 col-lg-3 offset-lg-2 text-start mt-2">
                                    Session
                                </div>
                                <div className="col-8 col-lg-5">
                                    <input ref={name} type="text" className="form-control " />
                                </div>
                            </div>
                            <div className="row mt-4 px-5">
                                <div className="col-4 col-lg-3 offset-lg-2 text-start mt-2">
                                  Date
                                </div>
                                <div className="col-8 col-lg-5">
                                    <input ref={date} type="date" className="form-control " />
                                </div>
                            </div>
                            <div className="row mt-4 px-5">
                                <div className="col-4 col-lg-3 offset-lg-2 text-start mt-2">
                                  Time
                                </div>
                                <div className="col-8 col-lg-5">
                                    <input ref={time} type="time" className="form-control " />
                                </div>
                            </div>
                          <div className="row mt-4 px-5">
                              <div className="col-4 col-lg-3 offset-lg-2 text-start mt-2">
                                  Meeting Link
                              </div>
                              <div className="col-8 col-lg-5">
                                  <input ref={link} type="text" className="form-control " />
                              </div>
                          </div>
                          <div className='mt-5 d-flex justify-content-center'>
                            <button onClick={add} className='btn btn-warning px-4 rounded'>Add</button>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container p-5 table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Session Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Meeting</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sessions.map((session, index) => {
                          return (
                              <tr key={session.ID}>
                                  <td>{index + 1}</td>
                                  <td>{session.session_name}</td>
                                  <td>{session.date}</td>
                                  <td>{session.time}</td>
                                  <td><a href={session.meeting_link} target="_blank" className="red-link" rel="noreferrer">Link</a></td>
                                  <td>
                                        <button onClick={() => remove(session.ID)} className="btn p-0 mb-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="10.743" height="15.499" viewBox="0 0 10.743 15.499">
                                                <path id="Icon_awesome-trash" data-name="Icon awesome-trash" d="M10.359.969H7.482L7.256.4A.578.578,0,0,0,6.741,0H4a.573.573,0,0,0-.513.4L3.261.969H.384A.443.443,0,0,0,0,1.453v.969a.443.443,0,0,0,.384.484h9.975a.443.443,0,0,0,.384-.484V1.453A.443.443,0,0,0,10.359.969ZM1.276,14.137A1.306,1.306,0,0,0,2.424,15.5H8.318a1.306,1.306,0,0,0,1.149-1.362L9.975,3.875H.767Z"/>
                                            </svg>
                                        </button>
                                    </td>
                              </tr>
                          )
                        })}
                    </tbody>
                </table>
            </div>
        </Layout>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
    darkmode: state.darkmode,
    sessions: state.sessions
  }
}

export default connect(mapStateToProps)(Home)
