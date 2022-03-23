import Avatar from "../../../assets/avatar.jpg"
import Sidebar from "../../layout/Sidebar"
import Header from "../../layout/Header"
import Progress from "../../studentComp/Progress"
import StepProgress from "../../studentComp/StepProgress"
import { useSelector } from 'react-redux';
import { Popover, OverlayTrigger } from "react-bootstrap"

import { Helmet } from 'react-helmet';

export const Home = () => {
    const sidebar = useSelector(state => state.sidebar);
    const currentProfile = "Front-End Web Development"
    const currentPoints = 0
    const currentLevel = 1
    const totalLevels = 6

    const news = [
        {
            id: 1,
            title: "Headline Title",
            content: "Lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur",
            link: "/news"
        },
        {
            id: 2,
            title: "Headline Title",
            content: "Lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur",
            link: "/news"
        }
    ]

    const sessions = [
        {
            id: 1,
            mentor: "Samar Ashraf",
            date: "3/10/2022",
            time: "02:00 PM",
            link: "https://google.com"
        },
        {
            id: 2,
            mentor: "Neimat Soliman",
            date: "4/10/2022",
            time: "05:00 PM",
            link: "https://google.com"
        },
    ]

    const popoverHoverFocus = (
        <Popover id="popover-trigger" title="Points Info">
            By gaining more points, you unlock more skills. You can gain points by completing courses
        </Popover>
      );

    return (
        <div className="grey-bg">
            <Helmet>
                <title>Home | Career Guidance</title>
                <meta name="description" content="App Description" />
                <meta name="theme-color" content="#008f68" />
            </Helmet>
            <Sidebar />
            <div className={`content ${sidebar ? "shift": ""}`}>
                <Header />
                <div className="purple-bg">
                    <div className="container">
                        <div className="p-5 pt-4 d-flex justify-content-between">
                            <div>
                                <div className="fw-normal" style={{fontSize: "20px"}}>Current Profile: {currentProfile}</div>
                                <span>Current Level: {currentLevel}</span>
                            </div>
                            <button className="btn btn-light px-4 pt-2 pb-2 mt-2 h-100 shadow">Switch Profile</button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="home-sections overlap shadow d-flex flex-column">
                                <div className="row">
                                    <div className="d-flex flex-column align-items-center">
                                        <Progress current={currentLevel-1} total={totalLevels-1} height="140px" width="140px" />
                                        <small className="mt-2" style={{color: "#a3a3a3"}}>Progress</small>
                                    </div>
                                </div>
                                <div className="row px-5">
                                    <StepProgress current={currentLevel-1} total={totalLevels-1} />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <div className="home-sections shadow text-start">
                                <div className="row pb-1">
                                    <div className="col-9">
                                        <h5 className="mb-1">Download Your {currentProfile} Resume</h5>
                                        <small>The resume can be edited in the resume page</small> 
                                    </div>
                                    <div className="col-3 mt-2">
                                        <button className="btn-purple">Download</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="home-sections shadow pt-3 pb-3">
                                <OverlayTrigger
                                    trigger={['hover', 'focus', 'click']}
                                    placement="top"
                                    overlay={popoverHoverFocus}
                                    >
                                    <button className="btn popover-btn"><i className="fa fa-question-circle"></i></button>
                                </OverlayTrigger>
                                <h5 style={{marginTop: "-32px"}}>Current Points</h5>
                                <div className="points">{currentPoints}</div>
                                <small className="fw-light">Points To Unlock Next Skill: 120</small>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="home-sections shadow pt-4 pb-4">
                                <h5 className="pb-1 mb-4">News Highlights</h5>
                                {news.map(element => {
                                    return (
                                        <div key={element.id} className="row text-start mb-4">
                                            <div className="col-1">
                                                #{element.id}
                                            </div>
                                            <div className="col-11">
                                                <h6 className="mb-0">{element.title}</h6>
                                                <small><div className="cut-text">{element.content}</div> <a className="readmore red-link" href={element.link}>Read more </a> </small>
                                            </div>
                                        </div>
                                    )
                                })}
                                <button className="btn-purple mt-2" style={{fontSize: "13px"}}>View More</button>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="home-sections shadow pt-4 pb-4" id="upcoming">
                                <h5 className="mb-5">Upcoming Sessions</h5>
                                {sessions.length > 0 ? sessions.map(session => {
                                    return (
                                        <div key={session.id} className="row mb-4">
                                            <div className="col-1">
                                                #{session.id}
                                            </div>
                                            <div className="col-1">
                                                <img className="profile-pic me-2" src={Avatar} alt="avatar" />
                                            </div>
                                            <div className="col-4 text-start px-4 pe-0">
                                                {session.mentor}
                                            </div>
                                            <div className="col-2">
                                                {session.date}
                                            </div>
                                            <div className="col-3">
                                                {session.time}
                                            </div>
                                            <div className="col-1">
                                                <a className="red-link" href={session.link}>Link</a>
                                            </div>
                                        </div>
                                    )
                                }) : <div className="mb-4"><h5 className="fst-italic fw-lighter">You haven't booked any sessions yet</h5></div> }
                                {sessions.length > 0 ? 
                                <button className="btn-purple mt-4" style={{fontSize: "13px"}}>View More</button> :
                                <button className="btn-purple mt-4" style={{fontSize: "13px"}}>View Mentors</button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

