import Layout from './Layout'
import PurpleBar from '../../components/common/PurpleBar'

import { getNotAcceptedMentors, acceptMentor, removeMentor } from '../../store/actions'

import { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

const Applications = ({ notAcceptedMentors }) => {
  const dispatch = useDispatch()

  const [spinner, setSpinner] = useState(false)

  const accept = async (mentor) => {
    setSpinner(true)
    await dispatch(acceptMentor(mentor.email))
    await dispatch(getNotAcceptedMentors())
    setSpinner(false)
  }

  const remove = async (mentor) => {
    setSpinner(true)
    await dispatch(removeMentor(mentor.User_id))
    await dispatch(getNotAcceptedMentors())
    setSpinner(false)
  }

  useEffect(async () => {
    setSpinner(true)
    await dispatch(getNotAcceptedMentors())
    setSpinner(false)
  }, [])

  return (
        <Layout spinner={spinner} pageName='Applications'>
            <PurpleBar title="Applications" button={false} />
            <div className="container p-5 table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Resume</th>
                            <th>Accept</th>
                            <th>Deny</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notAcceptedMentors.map((mentor, index) => {
                          return (
                            <tr key={`application-${index}`}>
                                <td>{index + 1}</td>
                                <td>{mentor.full_name}</td>
                                <td><a href={mentor.resume} target="_blank" className="red-link" rel="noreferrer">View</a></td>
                                <td>
                                    <button onClick={() => accept(mentor)} className="btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18.716" height="15.499" viewBox="0 0 18.716 15.499">
                                            <path id="Icon_awesome-check" data-name="Icon awesome-check" d="M6.357,19.772.274,13.017a1.122,1.122,0,0,1,0-1.47L1.6,10.078a.871.871,0,0,1,1.323,0l4.1,4.55L15.8,4.882a.872.872,0,0,1,1.323,0l1.323,1.47a1.122,1.122,0,0,1,0,1.47L7.68,19.772A.871.871,0,0,1,6.357,19.772Z" transform="translate(0 -4.577)" fill="#02d400"/>
                                        </svg>
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => remove(mentor)} className="btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13.426" height="13.423" viewBox="0 0 13.426 13.423">
                                            <path id="Icon_ionic-ios-close" data-name="Icon ionic-ios-close" d="M19.589,18l4.8-4.8A1.124,1.124,0,0,0,22.8,11.616l-4.8,4.8-4.8-4.8A1.124,1.124,0,1,0,11.616,13.2l4.8,4.8-4.8,4.8A1.124,1.124,0,0,0,13.2,24.384l4.8-4.8,4.8,4.8A1.124,1.124,0,1,0,24.384,22.8Z" transform="translate(-11.285 -11.289)"/>
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
    notAcceptedMentors: state.notAcceptedMentors
  }
}

export default connect(mapStateToProps)(Applications)
