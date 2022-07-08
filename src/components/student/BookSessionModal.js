import { Modal } from 'react-bootstrap'
import { InlineWidget } from 'react-calendly'
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
            size="xl"
            centered
        >
        <Modal.Body>
            <div className='px-5'>
                <InlineWidget url="https://calendly.com/marwa64/mentorship-session" />
            </div>
            <div className='d-flex flex-row align-items-center justify-content-around mt-4 mb-4 px-5 mx-5'>
                <div>
                    Date you selected:
                    <input type='date' className='form-control mt-2'/>
                </div>
                <div>
                    Time you selected:
                    <input type='time' className='form-control mt-2'/>
                </div>
            </div>
            <div className='d-flex flex-row align-items-center justify-content-center'>
                <button onClick={handleClose} className="btn btn-danger rounded px-4 mt-4 me-5">Cancel</button>
                <button onClick={confirm} className="btn-purple rounded px-4 mt-4">Confirm</button>
            </div>

        </Modal.Body>
      </Modal>
  )
}

export default BookSessionModal
