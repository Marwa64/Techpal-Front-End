import { Modal } from 'react-bootstrap'

import { useState } from 'react'

const BookSessionModal = ({ show, handleClose, mentor }) => {
  const [booked, setBooked] = useState(false)

  const confirm = () => {
    console.log(booked)
    handleClose()
    setBooked(false)
  }

  return (
        <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            centered
        >
        <Modal.Body>
            Have you successfully booked a session with { mentor ? mentor.name : '' }?
            <div className='d-flex flex-column align-items-center mt-4'>
                <div className='d-flex justify-content-between'>
                    <div className="form-check mr-5">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="book"
                            value={true}
                            checked={booked === true}
                            onChange={() => setBooked(true)}
                        />
                        <label className="form-check-label" htmlFor="book-yes">
                            Yes
                        </label>
                    </div>
                    <div className="form-check ms-5 ps-5">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="book"
                            value={false}
                            checked={booked === false}
                            onChange={() => setBooked(false)}
                        />
                        <label className="form-check-label" htmlFor="book-no">
                            No
                        </label>
                    </div>
                </div>
                <button onClick={confirm} className="btn-purple mt-4">Confirm</button>
            </div>
        </Modal.Body>
      </Modal>
  )
}

export default BookSessionModal
