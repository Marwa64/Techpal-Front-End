import Layout from './Layout'
import PurpleBar from '../../components/common/PurpleBar'
import BookSessionModal from '../../components/student/BookSessionModal'
import ReportMentorModal from '../../components/student/ReportMentorModal'
import MentorDetailsModal from '../../components/common/MentorDetailsModal'

import { getAcceptedMentors } from '../../store/actions'

import { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

const Mentors = ({ acceptedMentors }) => {
  const dispatch = useDispatch()

  const [bookSession, setBookSession] = useState(false)
  const [reportMentor, setReportMentor] = useState(false)
  const [viewMentor, setViewMentor] = useState(false)
  const [currentMentor, setCurrentMentor] = useState(null)
  const [spinner, setSpinner] = useState(false)

  const setMentor = (mentor) => {
    if (!mentor) {
      return
    }
    setCurrentMentor(mentor)
  }

  const book = (mentor) => {
    setMentor(mentor)
    // window.open(mentor.calendly_id, '_blank')
    setBookSession(true)
  }

  const report = (mentor) => {
    setMentor(mentor)
    setReportMentor(true)
  }

  const view = (mentor) => {
    setMentor(mentor)
    setViewMentor(true)
  }

  useEffect(async () => {
    setSpinner(true)
    await dispatch(getAcceptedMentors())
    setSpinner(false)
  }, [])

  return (
        <Layout spinner={spinner} pageName='Mentors'>
            <PurpleBar title="List of Mentors" button={false} />
            <div className="container p-5 table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Profile</th>
                            <th>Book Session</th>
                            <th>Report</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {acceptedMentors.map((mentor, index) => {
                          return (
                                <tr key={`${index}-${mentor.full_name}`}>
                                    <td>{index + 1}</td>
                                    <td>{mentor.full_name}</td>
                                    <td><button onClick={() => view(mentor)} className="btn red-link text-decoration-underline p-0">View</button></td>
                                    <td><button onClick={() => book(mentor)} className="btn red-link text-decoration-underline p-0">Book</button></td>
                                    <td>
                                        <button onClick={() => report(mentor)} className="btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16.786" height="16.778" viewBox="0 0 16.786 16.778">
                                            <path id="Icon_material-report" data-name="Icon material-report" d="M16.372,4.5H9.415L4.5,9.412v6.953l4.915,4.912h6.957l4.915-4.912V9.412ZM12.893,17.829a1.212,1.212,0,1,1,1.212-1.212A1.21,1.21,0,0,1,12.893,17.829Zm.933-4.008H11.961V8.228h1.865Z" transform="translate(-4.5 -4.5)" fill="#403f3f"/>
                                        </svg>

                                        </button>
                                    </td>
                                </tr>
                          )
                        })}
                    </tbody>
                </table>
            </div>
            <BookSessionModal show={bookSession} handleClose={() => { setBookSession(false) }} mentor={currentMentor} />
            <ReportMentorModal show={reportMentor} handleClose={() => { setReportMentor(false) }} selectedMentor={currentMentor} />
            <MentorDetailsModal show={viewMentor} handleClose={() => { setViewMentor(false) }} mentor={currentMentor} />
        </Layout>
  )
}

const mapStateToProps = state => {
  return {
    acceptedMentors: state.acceptedMentors
  }
}

export default connect(mapStateToProps)(Mentors)
