import Layout from './Layout'
import PurpleBar from '../../components/common/PurpleBar'

import { connect } from 'react-redux'

const Home = ({ user, darkmode }) => {
  const sessions = [
    {
      name: 'Career Advice',
      date: '3/10/2022',
      time: '02:00 PM',
      link: 'https://www.google.com'
    },
    {
      name: 'Clean Code',
      date: '3/10/2022',
      time: '02:00 PM',
      link: 'https://www.google.com'
    }
  ]

  return (
        <Layout spinner={false} pageName='Sessions'>
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
                                    <input type="text" className="form-control " />
                                </div>
                            </div>
                            <div className="row mt-4 px-5">
                                <div className="col-4 col-lg-3 offset-lg-2 text-start mt-2">
                                  Date
                                </div>
                                <div className="col-8 col-lg-5">
                                    <input type="date" className="form-control " />
                                </div>
                            </div>
                            <div className="row mt-4 px-5">
                                <div className="col-4 col-lg-3 offset-lg-2 text-start mt-2">
                                  Time
                                </div>
                                <div className="col-8 col-lg-5">
                                    <input type="time" className="form-control " />
                                </div>
                            </div>
                          <div className="row mt-4 px-5">
                              <div className="col-4 col-lg-3 offset-lg-2 text-start mt-2">
                                  Meeting Link
                              </div>
                              <div className="col-8 col-lg-5">
                                  <input type="text" className="form-control " />
                              </div>
                          </div>
                          <div className='mt-5 d-flex justify-content-center'>
                            <button className='btn btn-warning px-4 rounded'>Add</button>
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
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {sessions.map((session, index) => {
                          return (
                                <tr key={`session-${index}`}>
                                    <td>{index + 1}</td>
                                    <td>{session.name}</td>
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
    user: state.user,
    darkmode: state.darkmode
  }
}

export default connect(mapStateToProps)(Home)
