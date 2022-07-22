import { Modal } from 'react-bootstrap'

import { useRef, useState, useEffect } from 'react'

const EditCertificationsModal = ({ show, handleClose, element, update }) => {
  const newCertification = useRef(null)
  const [certifications, setCertifications] = useState([])

  useEffect(() => {
    if (element && element.data) {
      setCertifications(element.data)
    }
  }, [element])

  const addCertification = () => {
    if (newCertification.current.value) {
      const updatedCertifications = [...certifications, newCertification.current.value]
      setCertifications(updatedCertifications)
      newCertification.current.value = ''
    }
  }

  const removeCertification = (certificationToRemove) => {
    const updatedCertifications = certifications.filter(certification => certification !== certificationToRemove)
    setCertifications(updatedCertifications)
  }

  const confirm = () => {
    const newElement = {
      name: element.name,
      hide: element.hide,
      data: certifications
    }
    update(newElement)
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
            <h4 className='mt-3'>Edit Certifications</h4>
            <div className="container py-4 px-0 mt-2">
                <div className='row'>
                    <div className='col-8 offset-1'>
                        <input type="text" ref={newCertification} className="form-control h-3" />
                    </div>
                    <div className='col-3'>
                        <button onClick={addCertification} className='btn btn-warning rounded px-4'>Add</button>
                    </div>
                </div>
                <div className='container mt-5'>
                    <ul>
                        {certifications
                          ? certifications.map((certification, index) => {
                            return (
                                    <li key={`edit-${certification}`} className="row my-3">
                                        <div className='col-3'>
                                            <button onClick={() => removeCertification(certification)} className='btn'>
                                                <svg className="red-link mb-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="13.426" height="13.423" viewBox="0 0 13.426 13.423">
                                                    <path id="Icon_ionic-ios-close" data-name="Icon ionic-ios-close" d="M19.589,18l4.8-4.8A1.124,1.124,0,0,0,22.8,11.616l-4.8,4.8-4.8-4.8A1.124,1.124,0,1,0,11.616,13.2l4.8,4.8-4.8,4.8A1.124,1.124,0,0,0,13.2,24.384l4.8-4.8,4.8,4.8A1.124,1.124,0,1,0,24.384,22.8Z" transform="translate(-11.285 -11.289)"/>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className='col-3 text-end fw-bold me-3'>
                                            Certification #{index + 1}:
                                        </div>
                                        <div className='col-5 text-start'>
                                            {certification}
                                        </div>
                                    </li>
                            )
                          })
                          : <></>
                        }
                    </ul>
                </div>
            </div>
            <div className='d-flex justify-content-around mt-3 mb-2 px-5'>
                <button onClick={handleClose} className="btn btn-danger rounded px-4">Close</button>
                <button onClick={confirm} className="btn-purple rounded px-4">Save</button>
            </div>
        </Modal.Body>
      </Modal>
  )
}

export default EditCertificationsModal
