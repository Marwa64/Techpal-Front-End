import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Track from '../../components/common/Track'
import Skills from '../../components/student/Skills'
import { getTracks, createProfile } from '../../store/actions'
import { useDispatch, connect } from 'react-redux'

const CreateProfile = ({ user, tracks }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [localTracks, setLocalTracks] = useState([])
  const [completedSkills, setCompletedSkills] = useState([])

  const initData = () => {
    if (tracks.length < 1) {
      dispatch(getTracks())
    }
    if (tracks.length > 0) {
      setLocalTracks(tracks)
    }
  }

  const [trackNav, setTrackNav] = useState(null)
  const [skillNav, setSkillNav] = useState(null)

  const [chosenTrack, setTrack] = useState(tracks[0])

  let trackSlider = []; let skillSlider = []

  useEffect(() => {
    initData()
    setTrackNav(trackSlider)
    setSkillNav(skillSlider)
  }, [trackSlider, skillSlider])

  const isSkillCompleted = (updatedSkill) => {
    if (completedSkills.some(skill => skill.name === updatedSkill.name && skill.track_id === updatedSkill.track_id)) {
      return true
    } else {
      return false
    }
  }

  const updateSkill = (track_id, name) => {
    const updatedSkill = { track_id, name }
    if (isSkillCompleted(updatedSkill)) {
      setCompletedSkills(completedSkills.filter(skill => !(skill.name === updatedSkill.name && skill.track_id === updatedSkill.track_id)))
    } else {
      setCompletedSkills([updatedSkill, ...completedSkills])
    }
  }

  const create = async () => {
    let track = chosenTrack
    if (chosenTrack === undefined) {
      track = tracks[0]
    }
    const completed_skills = []
    completedSkills.forEach(skill => {
      if (skill.track_id === track.Track_id) {
        completed_skills.push(skill.name)
      }
    })
    await dispatch(createProfile(user.User_id, track.Track_id, completed_skills))
    navigate('/')
  }

  const trackSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
    centerPadding: '0px',
    beforeChange: (current, next) => setTrack(tracks[next])
  }

  const skillSettings = {
    vertical: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
        <div className="createprofile lightpurple-bg">
            <Helmet>
                <title>TechPal | Create Profile</title>
            </Helmet>
            <div className="container pb-5">
                <div className="row p-5 px-2">
                    <h5 className="fw-normal">Logo</h5>
                </div>
                <div className="row mt-1 d-flex justify-content-center text-center">
                    <div className="col-12 col-lg-6">
                        <h4>Select a Track</h4>
                        <div className="mt-4">
                        <Slider {...trackSettings} asNavFor={skillNav} ref={slider => { trackSlider = slider }}>
                            {localTracks.map(track => {
                              return (
                                    <div key={`track${track.Track_id}`} className="d-flex justify-content-center align-items-center">
                                        <Track name={track.name} color1={track.color1} color2={track.color2} />
                                    </div>
                              )
                            })}
                        </Slider>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                        <h4>Track Skills</h4>
                        <div className="mt-4">
                        <Slider {...skillSettings} asNavFor={trackNav} ref={slider => { skillSlider = slider }}>
                            {localTracks.map(track => {
                              return (
                                    <div key={`skill${track.Track_id}`} className="d-flex justify-content-center align-items-center">
                                        <Skills id={track.Track_id} skills={track.skills} updateSkill={updateSkill} isSkillCompleted={isSkillCompleted} />
                                        {/* <Skills id={track.Track_id} skills={track.skills} updateSkill={updateSkill} /> */}
                                    </div>
                              )
                            })}
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 col-lg-6 offset-lg-6 d-flex justify-content-center">
                        <button onClick={create} className="btn-purple px-5 pt-2 pb-2 fs-6">Save Profile</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
    tracks: state.tracks
  }
}

export default connect(mapStateToProps)(CreateProfile)
