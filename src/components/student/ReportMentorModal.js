import { Modal, Form } from 'react-bootstrap'
import Spinner from '../common/Spinner'
import { reportMentor } from '../../store/actions'

import { useDispatch } from 'react-redux'
import { useRef, useState } from 'react'

const ReportMentorModal = ({ show, handleClose, selectedMentor }) => {
  const dispatch = useDispatch()
  const [spinner, setSpinner] = useState(false)
  const reason = useRef(null)

  const confirm = async () => {
    const message = reason.current.value
    reason.current.style.boxShadow = 'none'
    if (message) {
      setSpinner(true)
      await dispatch(reportMentor(selectedMentor.email, message))
      setSpinner(false)
      handleClose()
    } else {
      reason.current.style.boxShadow = '1px 1px 7px #ff000094'
    }
  }

  return (
            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                centered
            >
            <Modal.Body>
                {spinner ? <Spinner /> : <></>}
                <h5 className='mt-3'>Report a Mentor</h5>
                <div className="container py-4 px-0 mt-3">
                    {selectedMentor
                      ? <div className="row">
                            <div className="col-4 col-lg-3 offset-lg-2 text-start mt-2">
                                Mentor
                            </div>
                            <div className="col-8 col-lg-5">
                                <Form.Select disabled aria-label="Default select example">
                                    <option value="test-mentor">{selectedMentor.full_name}</option>
                                </Form.Select>
                            </div>
                        </div>
                      : <></>
                    }
                    <div className="row mt-4">
                        <div className="col-4 col-lg-3 offset-lg-2 text-start mt-2">
                            What happened?
                        </div>
                        <div className="col-8 col-lg-5">
                            <textarea
                                type="text"
                                ref={reason}
                                placeholder="Fill your complaint here"
                                className="form-control"
                                rows="5"
                            />
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-around px-5 mx-5 mt-4 mb-2'>
                    <button onClick={handleClose} className="btn btn-danger rounded px-4">Cancel</button>
                    <button onClick={confirm} className="btn-purple rounded px-4">Submit</button>
                </div>
            </Modal.Body>
        </Modal>
  )
}

export default ReportMentorModal
