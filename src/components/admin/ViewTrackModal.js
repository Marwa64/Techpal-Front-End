import { Modal } from 'react-bootstrap'

const ViewTrackModal = ({ show, handleClose, skills }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="md"
      centered
    >
      <Modal.Body>
          <h5 className='mt-3'>Track Skills</h5>
          <div className='container mx-5 px-4'>
              <ul>
                {skills
                  ? Object.keys(skills).map((key, index) => {
                    return (
                    <li key={`${key}${skills[key]}`} className='row text-start my-4'>
                        <div className='row'>
                            <div className='col-4 fw-bold'>Skill #{index + 1}:</div>
                            <div className='col-auto'>{key} - {skills[key].points}</div>
                        </div>
                    </li>
                    )
                  })
                  : <></>
                }
            </ul>
          </div>
          <div className='d-flex justify-content-center mt-4 mb-2 px-5'>
              <button onClick={handleClose} className="btn-purple rounded px-4">Close</button>
          </div>
      </Modal.Body>
    </Modal>
  )
}

export default ViewTrackModal
