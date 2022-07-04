import Layout from './Layout'
import Avatar from '../../assets/avatar.jpg'
import Progress from '../../components/student/Progress'
import StepProgress from '../../components/student/StepProgress'
import { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Popover, OverlayTrigger } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { getNews } from '../../store/actions'

// import Template1 from '../../components/student/resumes/Template1'
// import Template2 from '../../components/student/resumes/Template2'
// import { PDFDownloadLink } from '@react-pdf/renderer'

const StudentHome = ({ darkmode, currentProfile, currentTrack, news }) => {
  const dispatch = useDispatch()

  const [spinner, setSpinner] = useState(true)
  const [totalLevels, setTotalLevels] = useState(0)
  const [skills, setSkills] = useState([])

  const navigate = useNavigate()

  useEffect(async () => {
    if (Object.keys(currentProfile).length === 0 || Object.keys(currentTrack).length === 0) {
      setSpinner(true)
    } else {
      await dispatch(getNews(currentTrack.name, 2))
      setTotalLevels(Object.keys(currentTrack.skills).length)
      let orderSkills = []
      if (currentProfile.completedSkills) {
        orderSkills = [...currentProfile.completedSkills]
      }
      Object.keys(currentTrack.skills).forEach(key => {
        if (!orderSkills.includes(key)) {
          orderSkills.push(key)
        }
      })
      setSkills(orderSkills)
      setSpinner(false)
    }
  }, [currentProfile, currentTrack])

  const sessions = [
    {
      id: 1,
      mentor: 'Samar Ashraf',
      date: '3/10/2022',
      time: '02:00 PM',
      link: 'https://google.com'
    },
    {
      id: 2,
      mentor: 'Neimat Soliman',
      date: '4/10/2022',
      time: '05:00 PM',
      link: 'https://google.com'
    }
  ]

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
                                        <StepProgress current={currentProfile.level} total={totalLevels - 1} skills={skills}/>
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
                                        <div className="col-12 col-lg-3 mt-4 mt-lg-2 d-flex justify-content-center">
                                            {/* <PDFDownloadLink
                                                document={<Template1 />}
                                                fileName="Resume.pdf"
                                                className="btn-purple"
                                            >
                                                {({ blob, url, loading, error }) =>
                                                loading ? "Loading document..." : "Download"
                                                }
                                            </PDFDownloadLink> */}
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
                                    <small className="fw-light">Points To Unlock Next Skill: 120</small>
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
                                    <h5 className="mb-4 mb-md-5">Upcoming Sessions</h5>
                                    {sessions.length > 0
                                      ? sessions.map(session => {
                                        return (
                                            <div key={session.id} className="mobile-border row mb-4 mt-4 mt-lg-0">
                                                <div className="col-12 col-md-1 d-none d-md-block">
                                                    #{session.id}
                                                </div>
                                                <div className="col-12 col-md-1">
                                                    <img className="profile-pic me-2" src={Avatar} alt="avatar" />
                                                </div>
                                                <div className="col-12 col-md-4 text-center text-lg-start px-0 px-md-4 pe-md-0 mt-2 mt-lg-0">
                                                    {session.mentor}
                                                </div>
                                                <div className="col-12 col-md-2 mt-2 mt-lg-0">
                                                    {session.date}
                                                </div>
                                                <div className="col-12 col-md-3 mt-2 mt-lg-0">
                                                    {session.time}
                                                </div>
                                                <div className="col-12 col-md-1 mt-2 mt-lg-0">
                                                    <a className="red-link" href={session.link}>Link</a>
                                                </div>
                                            </div>
                                        )
                                      })
                                      : <div className="mb-4"><h5 className="fst-italic fw-lighter">You haven&apos;t booked any sessions yet</h5></div> }
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
    news: state.news
  }
}

export default connect(mapStateToProps)(StudentHome)
