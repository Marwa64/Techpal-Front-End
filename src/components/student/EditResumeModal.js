import { Modal, Form } from 'react-bootstrap';

import { useRef, useState, useEffect } from 'react';

const EditResumeModal = ({ show, handleClose, element, update }) => {

    const title = useRef(null);
    const startYear = useRef(null);
    const endYear = useRef(null);
    const details = useRef(null);

    const [name, setName] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (element) {
            setName(element.name);
            setData(element.data ? element.data : []);
        }
    }, [element])

    const addData = () => {
        if (title.current.value && details.current.value) {
            const newData = {
                id: data ? data.length : 0,
                title: title.current.value,
                details: details.current.value,
            }
            if (name === 'Work Experience') { 
                newData.startYear = startYear.current.value;
                newData.endYear = endYear.current.value;
                startYear.current.value = '';
                endYear.current.value = '';
            }
            title.current.value = '';
            details.current.value = '';

            const updatedData = [...data, newData];
            setData(updatedData);
        }
    }

    const removeData = (dataToRemove) => {
        const updatedData = data.filter(thisData => thisData.id !== dataToRemove.id);
        setData(updatedData);
    }

    const confirm = () => {
        const newElement = {
            name: element.name,
            hide: element.hide,
            data,
        }
        update(newElement);
        handleClose();
    }

    return (
        <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            centered
        >
        <Modal.Body>
            <h5 className='mt-3'>Edit {name || ''}</h5>
            <div className="container py-4 px-0 mt-3">
                <div className="row">
                    <div className="col-4 col-lg-3 offset-lg-2 text-start mt-2">
                        Title
                    </div>
                    <div className="col-8 col-lg-5">
                        <input ref={title} type="text" className="form-control h-3" />
                    </div>
                </div>
                {name === 'Work Experience' ? 
                    <div className="row mt-3">
                        <div className="col-4 col-lg-3 offset-lg-2 text-start mt-1">
                            Start Year
                        </div>
                        <div className="col-8 col-lg-5">
                            <div className="row">
                                <div className="col-4">
                                    <Form.Select ref={startYear} aria-label="Default select example">
                                        {Array.apply(10, Array(61)).map((_, i) => {
                                            return (
                                                <option key={i + 1980} value={i + 1980}>{i + 1980}</option>
                                            )
                                        })}
                                    </Form.Select>
                                </div>
                                <div className="col-4 mt-1">
                                    End Year
                                </div>
                                <div className="col-4">
                                    <Form.Select ref={endYear} aria-label="Default select example">
                                        {Array.apply(10, Array(61)).map((_, i) => {
                                            return (
                                                <option key={i + 1980} value={i + 1980}>{i + 1980}</option>
                                            )
                                        })}
                                    </Form.Select>
                                </div>
                            </div>
                        </div>
                    </div> : <></>
                }
                <div className="row mt-3">
                    <div className="col-4 col-lg-3 offset-lg-2 text-start mt-2">
                        Details
                    </div>
                    <div className="col-8 col-lg-5">
                        <textarea
                            ref={details}
                            type="text"
                            placeholder=""
                            className="form-control"
                            rows="5"
                        />
                    </div>
                </div>
                <div>
                    <button onClick={addData} className='btn btn-warning rounded mt-4 px-4'>Add</button>
                </div>
            </div>
            <div className='container mx-5 px-5 mb-5'>
                <ul>
                    {data ?
                        data.map(thisData => {
                            return (
                                <li key={`${thisData.title}${thisData.id}`} className='row text-start my-4'>
                                    <div className='row fw-bold'>
                                        <div className='col-1'>
                                            <button onClick={() => removeData(thisData)} className='btn'>
                                                <svg className="red-link mb-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="13.426" height="13.423" viewBox="0 0 13.426 13.423">
                                                    <path id="Icon_ionic-ios-close" data-name="Icon ionic-ios-close" d="M19.589,18l4.8-4.8A1.124,1.124,0,0,0,22.8,11.616l-4.8,4.8-4.8-4.8A1.124,1.124,0,1,0,11.616,13.2l4.8,4.8-4.8,4.8A1.124,1.124,0,0,0,13.2,24.384l4.8-4.8,4.8,4.8A1.124,1.124,0,1,0,24.384,22.8Z" transform="translate(-11.285 -11.289)"/>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className='col-7'>{thisData.title}</div>
                                        {thisData.startYear && thisData.endYear ? 
                                            <div className='col-3'>{thisData.startYear}-{thisData.endYear}</div> : <></>
                                        }
                                    </div>
                                    <div className='col-12 offset-1'>
                                        {thisData.details}
                                    </div>
                                </li>
                            )
                        }) : <></>
                    }
                </ul>
            </div>
            <div className='d-flex justify-content-around mt-3 mb-2 px-5'>
                <button onClick={handleClose} className="btn btn-danger rounded px-4">Close</button>
                <button onClick={confirm} className="btn-purple rounded px-4">Save</button>
            </div>
        </Modal.Body>
      </Modal>
    )
}

export default EditResumeModal;