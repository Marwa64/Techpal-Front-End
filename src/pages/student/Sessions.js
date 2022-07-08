import Layout from './Layout'
import PurpleBar from '../../components/common/PurpleBar'

import { connect } from 'react-redux'

const Sessions = () => {
  const sessions = [
    {
      mentor: 'Samar Ashraf',
      sessionName: 'Clean Code',
      date: '3/10/2022',
      time: '02:00 PM',
      link: 'https://www.google.com'
    },
    {
      mentor: 'Neimat Soliman',
      sessionName: 'Career Advice',
      date: '3/10/2022',
      time: '02:00 PM',
      link: 'https://www.google.com'
    }
  ]

  return (
        <Layout spinner={false} pageName='Sessions'>
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
                    <tbody className="bg-white">
                        {sessions.map((session, index) => {
                          return (
                                <tr key={`session-${index}`}>
                                    <td>{index + 1}</td>
                                    <td>{session.mentor}</td>
                                    <td>{session.sessionName}</td>
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
