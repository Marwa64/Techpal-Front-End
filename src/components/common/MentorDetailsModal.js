import { Modal } from 'react-bootstrap'

const MentorDetailsModal = ({ show, handleClose, mentor }) => {
  return (
        <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            centered
        >
        <Modal.Body>
            <h5 className='mt-3 purple'>{mentor ? mentor.full_name : ''}</h5>
            {
                mentor
                  ? <div className="container view-mentor py-4 px-3 mt-3">
                        <div className="row align-items-center">
                            <div className="col-4 col-lg-2 offset-lg-2 text-start">
                                Email
                            </div>
                            <div className="col-8 col-lg-6 data">
                                {mentor.email}
                            </div>
                        </div>
                        <div className="row align-items-center mt-4">
                            <div className="col-4 col-lg-2 offset-lg-2 text-start">
                                About
                            </div>
                            <div className="col-8 col-lg-6 data pb-3">
                                {mentor.about || <span className='fst-italic'>No information available yet..</span> }
                            </div>
                        </div>
                    </div>
                  : <></>
            }
            <div className='d-flex justify-content-center mt-3 mb-2'>
                <button onClick={handleClose} className="btn-purple">Close</button>
            </div>
        </Modal.Body>
      </Modal>
  )
}

export default MentorDetailsModal
