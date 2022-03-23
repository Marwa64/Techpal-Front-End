import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import Level from "./Level"

const StepProgress = (props) => {
    const percent = Math.round((props.current / props.total) * 100)
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
        <div className='p-5 mt-3'>
            <ProgressBar percent={percent} filledBackground="linear-gradient(to right, #6C63F2, #4439F0)">
                {track.map(skill =>
                  <Step key={skill.id}>
                  {({ accomplished, index }) => (
                    <div>
                      <Level unlocked={accomplished} index={index} />
                      <small className={`level-name ${accomplished ? "purple" : ""}`}>{skill.name}</small>
                    </div>
                  )}
                </Step>)}
            </ProgressBar>
        </div>
    )
}

export default StepProgress;