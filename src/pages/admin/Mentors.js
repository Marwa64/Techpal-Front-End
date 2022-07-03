import Layout from './Layout'
import PurpleBar from '../../components/common/PurpleBar'
import MentorDetailsModal from '../../components/common/MentorDetailsModal'

import { useState } from 'react'
import { connect } from 'react-redux'

const AdminMentors = () => {
  const [viewMentor, setViewMentor] = useState(false)
  const [currentMentor, setCurrentMentor] = useState(null)

  const mentors = [
    {
      name: 'Samar Ashraf',
      calendly: 'https://calendly.com/'
    },
    {
      name: 'Neimat Soliman',
      calendly: 'https://calendly.com/'
    }
  ]

  const setMentor = (mentor) => {
    if (!mentor) {
      return
    }
    setCurrentMentor(mentor)
  }

  const view = (mentor) => {
    setMentor(mentor)
    setViewMentor(true)
  }

  const remove = (mentor) => {
    console.log(`remove ${mentor.name}`)
  }

  return (
    <Layout spinner={false} pageName='Mentors'>
            <PurpleBar title="List of Mentors" button={false} />
            <div className="container p-5 table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Profile</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {mentors.map((mentor, index) => {
                          return (
                                <tr key={`${index}-${mentor.name}`}>
                                    <td>{index + 1}</td>
                                    <td>{mentor.name}</td>
                                    <td><button onClick={() => view(mentor)} className="btn red-link text-decoration-underline p-0">View</button></td>
                                    <td>
                                        <button onClick={() => remove(mentor)} className="btn">
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
          <MentorDetailsModal show={viewMentor} handleClose={() => { setViewMentor(false) }} mentor={currentMentor} />
      </Layout>
  )
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps)(AdminMentors)
