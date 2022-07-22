import Layout from './Layout'
import PurpleBar from '../../components/common/PurpleBar'

import { connect } from 'react-redux'

const Sessions = () => {
  const sessions = [
    {
      mentor: 'Samar Ashraf',
      date: '3/10/2022',
      time: '02:00 PM',
      link: 'https://www.google.com'
    }
  ]

  return (
        <Layout spinner={false} pageName='Completed Sessions'>
            <PurpleBar title="Completed Sessions" button={true} buttonName="View Upcoming Sessions" path="/sessions" />
            <div className="container p-5 table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Mentor</th>
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
                                    <td>{session.mentor}</td>
                                    <td>{session.date}</td>
                                    <td>{session.time}</td>
                                    <td><a href={session.link} className="red-link">Link</a></td>
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

  }
}

export default connect(mapStateToProps)(Sessions)
