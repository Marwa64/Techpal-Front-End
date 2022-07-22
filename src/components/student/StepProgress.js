import 'react-step-progress-bar/styles.css'
import { ProgressBar, Step } from 'react-step-progress-bar'
import { useSelector } from 'react-redux'
import Level from './Level'

const StepProgress = (props) => {
  const percent = Math.round((props.current / props.total) * 100)
  const darkmode = useSelector(state => state.darkmode)

  return (
        <div>
          {/* Desktop view */}
          <div className='p-5 mt-3 d-none d-lg-block'>
            <ProgressBar percent={percent} filledBackground="linear-gradient(to right, #6C63F2, #4439F0)">
                  {props.skills.map((skill, keyIndex) =>
                    <Step key={`step-desktop-${keyIndex}`}>
                    {({ accomplished, index }) => (
                      <div className="d-flex flex-column align-items-center">
                        <Level unlocked={props.current >= keyIndex} index={index} />
                        <small className={`level-name ${props.current >= keyIndex ? (darkmode ? 'dark-level-name' : 'purple') : ''}`}>{skill}</small>
                      </div>
                    )}
                  </Step>)}
              </ProgressBar>
          </div>
          {/* Mobile view */}
          <div className='p-2 mt-2 d-block d-lg-none'>
              {props.skills.map((skill, keyIndex) =>
                  <div key={`step-mobile-${keyIndex}`} className="mt-4 d-flex flex-column align-items-center">
                      <Level unlocked={props.current >= keyIndex} index={keyIndex} />
                      <small className={`level-name mx-4 ${props.current >= keyIndex ? (darkmode ? 'dark-level-name' : 'purple') : ''}`}>{skill}</small>
                  </div>)}
          </div>
        </div>
  )
}

export default StepProgress
