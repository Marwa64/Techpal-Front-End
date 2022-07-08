import { Modal } from 'react-bootstrap'
import { InlineWidget } from 'react-calendly'

const BookSessionModal = ({ show, handleClose, mentor }) => {
  return (
        <Modal
            show={show}
            onHide={handleClose}
            size="xl"
            centered
        >
        <Modal.Body>
            {mentor
              ? <div className='px-5'>
                    <InlineWidget url={mentor.calendly_id} />
                </div>
              : <></>
            }
            <div className='d-flex flex-row align-items-center justify-content-center'>
                <button onClick={handleClose} className="btn-purple rounded px-4 mt-4">Close</button>
            </div>

        </Modal.Body>
      </Modal>
  )
}

export default BookSessionModal
