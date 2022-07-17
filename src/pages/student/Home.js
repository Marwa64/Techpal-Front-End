import Layout from './Layout'
import Progress from '../../components/student/Progress'
import StepProgress from '../../components/student/StepProgress'
import { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Popover, OverlayTrigger } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { getNews, getAllSessions } from '../../store/actions'

import ResumeDownload from '../../components/student/ResumeDownload'

const StudentHome = ({ darkmode, currentProfile, currentTrack, news, user, sessions }) => {
  const dispatch = useDispatch()

  const [spinner, setSpinner] = useState(true)
  const [totalLevels, setTotalLevels] = useState(0)
  const [skills, setSkills] = useState([])

  const getDate = (date) => {
    const newDate = new Date(date)
    return newDate.toLocaleString()
  }

  const navigate = useNavigate()

  const sort_order = (a, b) => {
    if (a.order < b.order) {
      return -1
    }
    if (a.order > b.order) {
      return 1
    }
    return 0
  }

  useEffect(() => {
    setTimeout(async () => {
      if (Object.keys(currentProfile).length > 0 && Object.keys(currentTrack).length > 0) {
        setSpinner(true)
        await dispatch(getNews(currentTrack.name, 2))
        await dispatch(getAllSessions())

        setTotalLevels(Object.keys(currentTrack.skills).length)
        let orderSkills = []
        if (currentProfile.completed_skills) {
          orderSkills = [...currentProfile.completed_skills]
        }
        const skillsArray = []
        Object.keys(currentTrack.skills).forEach(key => {
          if (!orderSkills.includes(key)) {
            skillsArray.push(key)
          }
        })
        skillsArray.sort(sort_order)
        orderSkills = [...currentProfile.completed_skills, ...skillsArray]
        setSkills(orderSkills)
        setSpinner(false)
      }
    }, 500)
  }, [currentProfile, currentTrack])

  const popoverHoverFocus = (
        <Popover id="popover-trigger" title="Points Info">
            By gaining more points, you unlock more skills. You can gain points by completing courses
        </Popover>
  )

  return (
        <Layout spinner={spinner} pageName='Home'>
            {!spinner
              ? <>
                    <div className={`${darkmode ? 'darkpurple-bg' : 'purple-bg'}`}>
                        <div className="container">
                            <div className="p-5 pt-4 d-flex justify-content-md-between flex-column flex-md-row text-center text-md-start">
                                <div>
                                    <div className="fw-normal" style={{ fontSize: '20px' }}>Current Profile: {currentTrack.name}</div>
                                    <span>Current Level: {currentProfile.level + 1}</span>
                                </div>
                                <button onClick={() => navigate('/profiles')} className="btn btn-light px-4 pt-2 pb-2 mt-4 mt-md-2 h-100 shadow">Switch Profile</button>
                            </div>
                        </div>
                    </div>
                    <div className="container px-4">
                        <div className="row">
                            <div className="col-12">
                                <div className={`section overlap shadow d-flex flex-column ${darkmode ? 'sidebar-dark' : ''}`}>
                                    <div className="row">
                                        <div className="d-flex flex-column align-items-center">
                                            <Progress current={currentProfile.level} total={totalLevels} height="140px" width="140px" cutout={50} />
                                            <small className="mt-2" style={{ color: '#a3a3a3' }}>Progress</small>
                                        </div>
                                    </div>
                                    <div className="row px-5">
                                        <StepProgress current={currentProfile.level - 1} total={totalLevels - 1} skills={skills}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-8">
                                <div className={`section shadow text-start  ${darkmode ? 'sidebar-dark' : ''}`}>
                                    <div className="row pb-1">
                                        <div className="col-12 col-lg-9 text-center text-lg-start">
                                            <h5 className="mb-1">Download Your {currentTrack.name} Resume</h5>
                                            <small>The resume can be edited in the profiles page</small>
                                        </div>
                                        <div className="col-12 col-lg-3 mt-4 mt-lg-1 d-flex justify-content-center">
                                            <ResumeDownload user={user} currentTrack={currentTrack} currentProfile={currentProfile} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className={`section shadow pt-3 pb-3 ${darkmode ? 'sidebar-dark' : ''}`}>
                                    <OverlayTrigger
                                        trigger={['hover', 'focus', 'click']}
                                        placement="top"
                                        overlay={popoverHoverFocus}
                                        >
                                        <button className="btn popover-btn"><i className="fa fa-question-circle"></i></button>
                                    </OverlayTrigger>
                                    <h5 style={{ marginTop: '-32px' }}>Current Points</h5>
                                    <div className="points">{currentProfile.points}</div>
                                    <small className="fw-light">Complete more courses to gain points</small>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className={`section shadow pt-4 pb-4 ${darkmode ? 'sidebar-dark' : ''}`}>
                                    <h5 className="pb-1 mb-4">News Highlights</h5>
                                    {news.map((article, index) => {
                                      return (
                                            <div key={`${article.author}${index}`} className="row text-start mb-4">
                                                <div className="col-1 d-none d-md-block">
                                                    #{index + 1}
                                                </div>
                                                <div className="col-12 col-md-11">
                                                    <h6 className="mb-1">{article.title}</h6>
                                                    <small><div className="cut-text">{article.content}</div> <a className="readmore red-link" href={article.url}>Read more </a> </small>
                                                </div>
                                            </div>
                                      )
                                    })}
                                    <button onClick={() => navigate('/news')} className="btn-purple mt-2" style={{ fontSize: '13px' }}>View More</button>
                                </div>
                            </div>

                            <div className="col-12 col-lg-6">
                                <div className={`section shadow pt-4 pb-4 ${darkmode ? 'sidebar-dark' : ''}`} id="upcoming">
                                    <h5 className="mb-4 mb-md-5">Public Sessions</h5>
                                    {sessions.length > 0
                                      ? sessions.map((session, index) => {
                                        if (index < 3) {
                                          return (
                                                <div key={session.ID} className="mobile-border row mb-4 mt-4 mt-lg-0">
                                                    <div className="col-12 col-md-1 d-none d-md-block">
                                                        #{index + 1}
                                                    </div>
                                                    <div className="col-12 col-md-5 text-center text-lg-start px-0 px-md-4 pe-md-0 mt-2 mt-lg-0">
                                                        <h6>{session.session_name}</h6>
                                                    </div>
                                                    <div className="col-12 col-md-5 mt-2 mt-lg-0">
                                                        {getDate(session.date)}
                                                    </div>
                                                    <div className="col-12 col-md-1 mt-2 mt-lg-0">
                                                        <a className="red-link" href={session.meeting_link} target="_blank" rel="noreferrer">Link</a>
                                                    </div>
                                                </div>
                                          )
                                        } else {
                                          return <></>
                                        }
                                      })
                                      : <div className="mb-4"><h5 className="fst-italic fw-lighter">There are no public sessions available yet</h5></div> }
                                    {sessions.length > 0
                                      ? <button onClick={() => navigate('/sessions')} className="btn-purple mt-2 mt-md-4" style={{ fontSize: '13px' }}>View More</button>
                                      : <button onClick={() => navigate('/mentors')} className="btn-purple mt-2 mt-md-4" style={{ fontSize: '13px' }}>View Mentors</button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
              : <></>
            }
        </Layout>
  )
}
const mapStateToProps = state => {
  return {
    darkmode: state.darkmode,
    currentProfile: state.currentProfile,
    currentTrack: state.currentTrack,
    news: state.news,
    user: state.user,
    sessions: state.sessions
  }
}

export default connect(mapStateToProps)(StudentHome)
