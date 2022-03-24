import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";

import Track from "../../studentComp/Track"
import Skills from "../../studentComp/Skills"

const CreateProfile = () => {
    const [trackNav, setTrackNav] = useState(null); 
    const [skillNav, setSkillNav] = useState(null);

    let trackSlider = [], skillSlider = [];

    useEffect(() => {
        setTrackNav(trackSlider);
        setSkillNav(skillSlider);   
    }, [trackSlider, skillSlider]);

    const tracks = [
        {
            id: 1,
            name: "Front-End Web Development",
            color1: "#6B4CE9",
            color2: "#4CA4E9"
        },
        {
            id: 2,
            name: "Back-End Web Development",
            color1: "#4CE98B",
            color2: "#4CE9E4"
        },
        {
            id: 3,
            name: "Android Developer",
            color1: "#DF4CE9",
            color2: "#E94C91"
        },
        {
            id: 4,
            name: "Dev-Ops",
            color1: "#E97F4C",
            color2: "#E9E94C"
        },
        {
            id: 5,
            name: "Cyber Security",
            color1: "#70E94C",
            color2: "#D4E94C"
        }
    ]
    
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
        centerPadding: "0px"
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
        <div className="createprofile">
            <div className="container pb-5">
                <div className="row p-5 px-2">
                    <h5 className="fw-normal">Logo</h5>
                </div>
                <div className="row mt-3 d-flex justify-content-center text-center">
                    <div className="col-6">
                        <h4>Select Track</h4>
                        <div className="mt-4">
                        <Slider {...trackSettings} asNavFor={skillNav} ref={slider => {trackSlider = slider;}}>
                            {tracks.map(track => {
                                return (
                                    <div key={track.id} className="d-flex justify-content-center align-items-center">
                                        <Track name={track.name} color1={track.color1} color2={track.color2} />
                                    </div>
                                )
                            })}
                        </Slider>
                        </div>
                    </div>
                    <div className="col-6">
                        <h4>Track Skills</h4>
                        <div className="mt-4">
                        <Slider {...skillSettings} asNavFor={trackNav} ref={slider => {skillSlider = slider;}}>
                            <div>
                                <Skills />
                            </div>
                            <div>
                                <h3>B</h3>
                            </div>
                            <div>
                                <h3>C</h3>
                            </div>
                            <div>
                                <h3>D</h3>
                            </div>
                            <div>
                                <h3>E</h3>
                            </div>
                            <div>
                                <h3>F</h3>
                            </div>
                            <div>
                                <h3>G</h3>
                            </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateProfile