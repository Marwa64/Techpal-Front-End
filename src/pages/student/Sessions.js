import Layout from './Layout'
import PurpleBar from '../../components/common/PurpleBar'
import MentorDetailsModal from '../../components/common/MentorDetailsModal'

import { getAllSessions, getAcceptedMentors } from '../../store/actions'

import { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

const Sessions = ({ sessions, acceptedMentors }) => {
  const dispatch = useDispatch()
  const [spinner, setSpinner] = useState(false)
  const [currentMentor, setCurrentMentor] = useState(null)
  const [viewMentor, setViewMentor] = useState(false)

  const view = (mentorId) => {
    const mentor = acceptedMentors.filter(mentor => mentor.ID === mentorId)
    if (mentor.length > 0) {
      setCurrentMentor(mentor[0])
      setViewMentor(true)
    }
  }

  const getMentor = (mentorId) => {
    const mentor = acceptedMentors.filter(mentor => mentor.ID === mentorId)
    if (mentor.length > 0) {
      return mentor[0].full_name
    }
    return ''
  }

  useEffect(async () => {
    setSpinner(true)
    await dispatch(getAllSessions())
    await dispatch(getAcceptedMentors())
    setSpinner(false)
  }, [])

  return (
    <Layout spinner={spinner} pageName='Sessions'>
        <PurpleBar title="Public Sessions" button={false} />
        <div className="container p-5 table-container">
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Mentor</th>
                        <th>Session Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Meeting</th>
                    </tr>
                </thead>
                <tbody>
                    {sessions.map((session, index) => {
                      return (
                        <tr key={`session-${index}`}>
                            <td>{index + 1}</td>
                            <td>
                              <button className='btn purple p-0' onClick={() => view(session.MentorId)}>
                                {getMentor(session.MentorId)}
                              </button>
                            </td>
                            <td>{session.session_name}</td>
                            <td>{session.date}</td>
                            <td>{session.time}</td>
                            <td><a href={session.meeting_link} target="_blank" className="red-link" rel="noreferrer">Link</a></td>
                        </tr>
                      )
                    })}
                </tbody>
            </table>
        </div>
        <MentorDetailsModal show={viewMentor} handleClose={() => { setViewMentor(false) }} mentor={currentMentor} />
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    sessions: state.sessions,
    acceptedMentors: state.acceptedMentors
  }
}

export default connect(mapStateToProps)(Sessions)
