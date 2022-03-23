
import Sidebar from "../../layout/Sidebar"
import Header from "../../layout/Header"
import Progress from "../../studentComp/Progress"
import StepProgress from "../../studentComp/StepProgress"
import { useSelector } from 'react-redux';

export const Home = () => {
    const sidebar = useSelector(state => state.sidebar);
    const currentProfile = "Front-End Web Development"
    const currentLevel = 1
    const totalLevels = 6

    return (
        <div className="grey-bg">
            <Sidebar />
            <div className={`content ${sidebar ? "shift": ""}`}>
                <Header />
                <div className="purple-bg">
                    <div className="container">
                        <div className="p-5 pt-4 d-flex justify-content-between">
                            <div>
                                <h5 className="fw-normal">Current Profile: {currentProfile}</h5>
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
                            <div className="home-sections shadow">
                                Download Resume
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="home-sections shadow">
                                Current Points
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5">
                            <div className="home-sections shadow">
                                News Highlights
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="home-sections shadow">
                                Upcoming Sessions
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

