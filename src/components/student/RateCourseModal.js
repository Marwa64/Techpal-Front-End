import { Modal } from 'react-bootstrap'
import { StarsRating } from 'stars-rating-react-hooks'

import { useState } from 'react'

const RateCourseModal = ({ show, handleClose, course, rate }) => {
  const config = {
    totalStars: 5,
    initialSelectedValue: 0,
    renderFull: '★',
    renderEmpty: '☆'
  }

  const [rating, setRating] = useState(0)

  const submit = () => {
    console.log(rating)
    if (rating > 0) {
      rate(course.course_id, rating)
      handleClose()
    }
  }

  return (
        <Modal
            show={show}
            onHide={handleClose}
            size="md"
            centered
        >
        <Modal.Body>
          <h5 className='mt-3'>How would you rate this course?</h5>
          <div className='px-5'>
            <StarsRating
              config={config}
              onStarsRated={(value) => {
                setRating(value)
              }}
            />
          </div>
          <div className='d-flex flex-column flex-md-row justify-content-around px-5 mx-5 mt-4 mb-2'>
                    <button onClick={handleClose} className="btn btn-danger rounded px-4">Cancel</button>
                    <button onClick={submit} className="btn-purple rounded px-4">Submit</button>
                </div>

        </Modal.Body>
      </Modal>
  )
}

export default RateCourseModal
