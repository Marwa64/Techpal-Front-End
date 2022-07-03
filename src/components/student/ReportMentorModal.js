import { Modal, Form } from 'react-bootstrap'

import { useRef } from 'react'

const ReportMentorModal = ({ show, handleClose, selectedMentor }) => {
  const mentor = useRef(null)
  const session = useRef(null)
  const reason = useRef(null)

  const confirm = () => {
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
            <h5 className='mt-3'>Report a Mentor</h5>
            <div className="container py-4 px-0 mt-3">
                <div className="row">
                    <div className="col-4 col-lg-3 offset-lg-2 text-start mt-2">
                        Mentor
                    </div>
                    <div className="col-8 col-lg-5">
                        <Form.Select ref={mentor} aria-label="Default select example">
                            <option value="test-mentor">Test Mentor</option>
                        </Form.Select>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-4 col-lg-3 offset-lg-2 text-start mt-2">
                        Session ID
                    </div>
                    <div className="col-8 col-lg-5">
                        <Form.Select ref={session} aria-label="Default select example">
                            <option value="test-session">Test Session</option>
                        </Form.Select>
                    </div>
                </div>
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
            <div className='d-flex justify-content-around mt-3 mb-2'>
                <button onClick={handleClose} className="btn btn-danger px-5">Cancel</button>
                <button onClick={confirm} className="btn-purple px-5">Submit</button>
            </div>
        </Modal.Body>
      </Modal>
  )
}

export default ReportMentorModal
