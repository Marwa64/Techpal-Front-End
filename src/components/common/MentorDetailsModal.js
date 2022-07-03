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
            <h5 className='mt-3 purple'>{mentor ? mentor.name : ''}</h5>
            <div className="container view-mentor py-4 px-3 mt-3">
                <div className="row">
                    <div className="col-4 col-lg-2 offset-lg-2 text-start mt-2">
                        Email
                    </div>
                    <div className="col-8 col-lg-6 data">
                        asd
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-4 col-lg-2 offset-lg-2 text-start mt-2">
                        About
                    </div>
                    <div className="col-8 col-lg-6 data pb-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                         when an unknown printer took a galley of type and scrambled it to make a type
                         specimen book. It has survived not only five centuries, but also the leap
                         into electronic typesetting, remaining essentially unchanged.
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center mt-3 mb-2'>
                <button onClick={handleClose} className="btn-purple">Close</button>
            </div>
        </Modal.Body>
      </Modal>
  )
}

export default MentorDetailsModal
