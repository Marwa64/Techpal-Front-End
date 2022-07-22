import { Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useRef } from 'react'

import { addSkill, getSkills } from '../../store/actions'

const AddSkillModal = ({ show, handleClose }) => {
  const dispatch = useDispatch()

  const skillName = useRef(null)

  const confirm = async () => {
    if (!skillName.current.value) {
      return
    }

    await dispatch(addSkill(skillName.current.value))
    await dispatch(getSkills())
    handleClose()
  }

  return (
        <Modal
            show={show}
            onHide={handleClose}
            size="md"
            centered
        >
        <Modal.Body>
            <h5 className='mt-3'>Add Skill</h5>
            <div className="container py-4 px-0 mt-3">
              <div className="d-flex justify-content-center px-5 mx-5">
                <input ref={skillName} type="text" placeholder='Skill Name' className="form-control text-center h-3" />
              </div>
            </div>
            <div className='d-flex justify-content-around mt-4 mb-2 px-5'>
                <button onClick={handleClose} className="btn btn-danger rounded px-4">Close</button>
                <button onClick={confirm} className="btn-purple rounded px-4">Add</button>
            </div>
        </Modal.Body>
      </Modal>
  )
}

export default AddSkillModal
