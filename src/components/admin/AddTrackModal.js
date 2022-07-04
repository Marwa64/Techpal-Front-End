import { Modal } from 'react-bootstrap'

import { addTrack, getTracks } from '../../store/actions'
import { useDispatch } from 'react-redux'
import { useRef, useState } from 'react'
import { HexColorPicker } from 'react-colorful'

const AddTrackModal = ({ show, handleClose }) => {
  const dispatch = useDispatch()

  const trackName = useRef(null)
  const skillName = useRef(null)
  const skillPoints = useRef(null)

  const [skills, setSkills] = useState({})
  const [skillsArray, setSkillsArray] = useState([])
  const [color1, setColor1] = useState('#aabbcc')
  const [color2, setColor2] = useState('#aabbcc')

  const addSkill = () => {
    if (skillName.current.value && skillPoints.current.value) {
      const updatedSkills = skills
      updatedSkills[skillName.current.value] = Number(skillPoints.current.value)
      const newSkill = {
        name: skillName.current.value,
        points: Number(skillPoints.current.value)
      }
      const updatedArray = [...skillsArray, newSkill]
      setSkills(updatedSkills)
      setSkillsArray(updatedArray)

      skillName.current.value = ''
      skillPoints.current.value = ''
    }
  }

  const removeSkill = (skillToRemove) => {
    const updatedSkills = Object.keys(skills).filter(skill => skill !== skillToRemove)
    setSkills(updatedSkills)
    const updatedArray = skillsArray.filter(skill => skill.name !== skillToRemove)
    setSkillsArray(updatedArray)
  }

  const confirm = async () => {
    if (!trackName.current.value) {
      return
    }
    const track = {
      name: trackName.current.value,
      color1,
      color2,
      skills
    }
    await dispatch(addTrack(track))
    await dispatch(getTracks())
    handleClose()
  }

  return (
        <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            centered
        >
        <Modal.Body>
            <h5 className='mt-3'>Add Track</h5>
            <div className="container py-4 px-0 mt-3">
              <div className="row">
                  <div className="col-4 col-lg-3 offset-lg-2 text-start mt-2">
                      Track Name
                  </div>
                  <div className="col-8 col-lg-5">
                      <input ref={trackName} type="text" placeholder='Name' className="form-control h-3" />
                  </div>
              </div>
              <div className="row mt-3">
                  <div className="col-4 col-lg-3 offset-lg-2 text-start mt-2">
                      Gradient
                  </div>
                  <div className="col-8 col-lg-5">
                    <div
                      className='rounded'
                      style={{ height: '45px', width: '120px', backgroundImage: `linear-gradient(to right, ${color1} , ${color2})` }}
                    ></div>
                  </div>
              </div>
              <div className="row p-5">
                  <div className="col-6 d-flex justify-content-center">
                    <HexColorPicker color={color1} onChange={setColor1} />
                  </div>
                  <div className="col-6 d-flex justify-content-center">
                    <HexColorPicker color={color2} onChange={setColor2} />
                  </div>
              </div>
              <div className="row mt-3">
                  <div className="col-4 col-lg-3 offset-lg-2 text-start mt-1">
                      Skill
                  </div>
                  <div className="col-8 col-lg-5">
                      <div className="row">
                          <div className="col-8">
                            <input ref={skillName} type="text" placeholder='Name' className="form-control h-3" />
                          </div>
                          <div className="col-4">
                            <input ref={skillPoints} type="text" placeholder='Points' className="form-control h-3" />
                          </div>
                      </div>
                  </div>
              </div>
            <div>
                <button onClick={addSkill} className='btn purple rounded mt-4 px-2'>+ Add Skill</button>
            </div>
            </div>
            <div className='container mx-5 px-5'>
                <ul>
                    {skillsArray.map((skill, index) => {
                      return (
                        <li key={`${skill.name}${skill.points}`} className='row text-start my-2'>
                            <div className='row'>
                                <div className='col-1 offset-2'>
                                    <button onClick={() => removeSkill(skill.name)} className='btn'>
                                        <svg className="red-link mb-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="13.426" height="13.423" viewBox="0 0 13.426 13.423">
                                            <path id="Icon_ionic-ios-close" data-name="Icon ionic-ios-close" d="M19.589,18l4.8-4.8A1.124,1.124,0,0,0,22.8,11.616l-4.8,4.8-4.8-4.8A1.124,1.124,0,1,0,11.616,13.2l4.8,4.8-4.8,4.8A1.124,1.124,0,0,0,13.2,24.384l4.8-4.8,4.8,4.8A1.124,1.124,0,1,0,24.384,22.8Z" transform="translate(-11.285 -11.289)"/>
                                        </svg>
                                    </button>
                                </div>
                                <div className='col-2 fw-bold'>Skill #{index + 1}:</div>
                                <div className='col-auto'>{skill.name} - {skill.points}</div>
                            </div>
                        </li>
                      )
                    })
                    }
                </ul>
            </div>
            <div className='d-flex justify-content-around mt-4 mb-2 px-5'>
                <button onClick={handleClose} className="btn btn-danger rounded px-4">Close</button>
                <button onClick={confirm} className="btn-purple rounded px-4">Save</button>
            </div>
        </Modal.Body>
      </Modal>
  )
}

export default AddTrackModal
