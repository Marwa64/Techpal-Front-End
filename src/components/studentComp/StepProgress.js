import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { useSelector } from 'react-redux';
import Level from "./Level"

const StepProgress = (props) => {
    const percent = Math.round((props.current / props.total) * 100)
    const darkmode = useSelector(state => state.darkmode);
    const track = [
      {
        id: 1,
        name: "HTML"
      },
      {
        id: 2,
        name: "CSS"
      },
      {
        id: 3,
        name: "JavaScript"
      },
      {
        id: 4,
        name: "CSS Framework"
      },
      {
        id: 5,
        name: "JS Framework"
      },
      {
        id: 6,
        name: "Webpack"
      }
    ]
    return (
        <div>
          <div className='p-5 mt-3 d-none d-lg-block'>
            <ProgressBar percent={percent} filledBackground="linear-gradient(to right, #6C63F2, #4439F0)">
                  {track.map(skill =>
                    <Step key={skill.id}>
                    {({ accomplished, index }) => (
                      <div className="d-flex flex-column align-items-center">
                        <Level unlocked={accomplished} index={index} />
                        <small className={`level-name ${accomplished ? (darkmode ? "dark-level-name" : "purple") : ""}`}>{skill.name}</small>
                      </div>
                    )}
                  </Step>)}
              </ProgressBar>
          </div>
          <div className='p-2 mt-2 d-block d-lg-none'>
              {track.map((skill, index) =>
                  <div className="mt-4 d-flex flex-column align-items-center">
                      <Level unlocked={props.current >= index} index={index} />
                      <small className={`level-name mx-4 ${props.current >= index ? (darkmode ? "dark-level-name" : "purple") : ""}`}>{skill.name}</small>
                  </div>)}
          </div>
        </div>
    )
}

export default StepProgress;