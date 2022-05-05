import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Track from "../../components/student/Track"
import Skills from "../../components/student/Skills"

const CreateProfile = () => {
    const navigate = useNavigate();
    const [trackNav, setTrackNav] = useState(null)
    const [skillNav, setSkillNav] = useState(null)
    const [tracks, setTracks] = useState(
        [
            {
                id: 1,
                name: "Front-End Web Development",
                color1: "#6B4CE9",
                color2: "#4CA4E9",
                skills: [
                    { name: "HTML", done: false },
                    { name: "CSS", done: false },
                    { name: "JavaScript", done: false },
                    { name: "CSS Framework", done: false },
                    { name: "JS Framework", done: false },
                    { name: "Webpack", done: false }
                ]
            },
            {
                id: 2,
                name: "Back-End Web Development",
                color1: "#4CE98B",
                color2: "#4CE9E4",
                skills: [
                    { name: "Node JS", done: false },
                    { name: "Express JS", done: false },
                    { name: "SocketIO", done: false },
                    { name: "MongoDB", done: false }
                ]
            },
            {
                id: 3,
                name: "Android Developer",
                color1: "#DF4CE9",
                color2: "#E94C91",
                skills: [
                    { name: "Skill 1", done: false },
                    { name: "Skill 2", done: false },
                    { name: "Skill 3", done: false },
                    { name: "Skill 4", done: false },
                    { name: "Skill 5", done: false }
                ]
            },
            {
                id: 4,
                name: "Dev-Ops",
                color1: "#E97F4C",
                color2: "#E9E94C",
                skills: [
                    { name: "Skill 1", done: false },
                    { name: "Skill 2", done: false },
                    { name: "Skill 3", done: false },
                    { name: "Skill 4", done: false },
                ]
            },
            {
                id: 5,
                name: "Cyber Security",
                color1: "#70E94C",
                color2: "#D4E94C",
                skills: [
                    { name: "Skill 1", done: false },
                    { name: "Skill 2", done: false },
                    { name: "Skill 3", done: false },
                    { name: "Skill 4", done: false },
                    { name: "Skill 5", done: false },
                    { name: "Skill 6", done: false }
                ]
            }
        ]
    );
    const [chosenTrack, setTrack] = useState(tracks[0])

    let trackSlider = [], skillSlider = [];

    useEffect(() => {
        setTrackNav(trackSlider);
        setSkillNav(skillSlider);   
    }, [trackSlider, skillSlider]);

    const updateSkill = (track_id, name, status) => {
        let thisTrack = tracks.filter(track =>  track.id === track_id)[0]
        let thisSkills = thisTrack.skills.map(skill => skill.name === name ? {...skill, done: status} : skill)
        setTracks(tracks.map(track => track.id === track_id ? {...track, skills: thisSkills} : track))
        thisTrack.skills = thisSkills
        setTrack(thisTrack)
    }

    const createProfile = () => {
        console.log(chosenTrack)
        navigate("/")
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
        centerPadding: "0px",
        beforeChange: (current, next) => setTrack(tracks[next]),
      };

      
    const skillSettings = {
        vertical: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      
    return (
        <div className="createprofile lightpurple-bg">
            <div className="container pb-5">
                <div className="row p-5 px-2">
                    <h5 className="fw-normal">Logo</h5>
                </div>
                <div className="row mt-1 d-flex justify-content-center text-center">
                    <div className="col-12 col-lg-6">
                        <h4>Select a Track</h4>
                        <div className="mt-4">
                        <Slider {...trackSettings} asNavFor={skillNav} ref={slider => {trackSlider = slider;}}>
                            {tracks.map(track => {
                                return (
                                    <div key={`track${track.id}`} className="d-flex justify-content-center align-items-center">
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
                        <Slider {...skillSettings} asNavFor={trackNav} ref={slider => {skillSlider = slider;}}>
                            {tracks.map(track => {
                                return (
                                    <div key={`skill${track.id}`} className="d-flex justify-content-center align-items-center">
                                        <Skills id={track.id} skills={track.skills} updateSkill={updateSkill} />
                                    </div>
                                )
                            })}
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 col-lg-6 offset-lg-6 d-flex justify-content-center">
                        <button onClick={createProfile} className="btn-purple px-5 pt-2 pb-2 fs-6">Save Profile</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateProfile