import Sidebar from "../../components/student/Sidebar"
import Header from "../../components/common/Header"
import DragIcon from "../../assets/DragIcon"
import Template1 from "../../components/student/resumes/Template1"
import Template2 from "../../components/student/resumes/Template2"

import { useRef } from "react"
import { PDFViewer } from '@react-pdf/renderer';
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { useDrag } from 'react-dnd'
import { Helmet } from 'react-helmet';

const ResumeBuilder = ({ sidebar, darkmode }) => {
    const DND_ITEM_TYPE = 'div'
    const dragRef = useRef(null)

    const [{ isDragging }, drag] = useDrag({
        type: DND_ITEM_TYPE,
        collect: monitor => ({
          isDragging: monitor.isDragging(),
        }),
      })
    return (
        <div className={`${darkmode ? "darkgrey-bg" : "grey-bg"}`}>
            <Helmet>
                <title>TechPal | Resume Builder</title>
            </Helmet>
            <Sidebar />
            <div className={`content ${sidebar ? "shift": ""}`}>
                <Header />
                <div className="container resume-builder">
                    <div className="row mt-4">
                        <div className="col-12 d-flex justify-content-center">
                            <button className="btn-purple">Save</button>
                        </div>
                    </div>
                    <div className="row mt-4 pt-2">
                        <div className="col-12 col-xl-6 d-none d-lg-block">
                        <PDFViewer height='97%' width='100%'>
                            <Template1></Template1>
                        </PDFViewer>
                        </div>
                        <div className="col-12 col-xl-6 text-center">
                            <div className="mb-4 px-4 mx-1">
                                <h5>Template</h5>
                                <div className="row mt-3">
                                    <Form.Select aria-label="Default select template">
                                        <option value={1}>Template 1</option>
                                        <option value={2}>Template 2</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className="mb-4 px-3">
                                <h5>Left Column</h5>
                                <div>
                                    <div ref={drag} className="column-section">
                                        <div><DragIcon /> About Me</div>
                                        <div className="mt-1">
                                            <button className="btn">
                                                <i className="fa fa-edit" />
                                            </button>
                                            <button className="btn">
                                                <i className="fa fa-eye" />
                                                {/* <i className="fa fa-eye-slash" /> */}
                                            </button>
                                        </div>
                                    </div>
                                    <div ref={drag} className="column-section">
                                        <div><DragIcon /> Contact</div>
                                        <div className="mt-1">
                                            <button className="btn">
                                                <i className="fa fa-edit" />
                                            </button>
                                            <button className="btn">
                                                <i className="fa fa-eye" />
                                                {/* <i className="fa fa-eye-slash" /> */}
                                            </button>
                                        </div>
                                    </div>
                                    <div ref={drag} className="column-section">
                                        <div><DragIcon /> Education</div>
                                        <div className="mt-1">
                                            <button className="btn">
                                                <i className="fa fa-edit" />
                                            </button>
                                            <button className="btn">
                                                <i className="fa fa-eye" />
                                                {/* <i className="fa fa-eye-slash" /> */}
                                            </button>
                                        </div>
                                    </div>
                                    <div ref={drag} className="column-section">
                                        <div><DragIcon /> Skills</div>
                                        <div className="mt-1">
                                            <button className="btn">
                                                <i className="fa fa-edit" />
                                            </button>
                                            <button className="btn">
                                                <i className="fa fa-eye" />
                                                {/* <i className="fa fa-eye-slash" /> */}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4 px-3">
                                <h5>Right Column</h5>
                                <div className="column-section">
                                    <div><DragIcon /> Work Experience</div>
                                    <div className="mt-1">
                                        <button className="btn">
                                            <i className="fa fa-edit" />
                                        </button>
                                        <button className="btn">
                                            <i className="fa fa-eye" />
                                            {/* <i className="fa fa-eye-slash" /> */}
                                        </button>
                                    </div>
                                </div>
                                <div className="column-section">
                                    <div><DragIcon /> Projects</div>
                                    <div className="mt-1">
                                        <button className="btn">
                                            <i className="fa fa-edit" />
                                        </button>
                                        <button className="btn">
                                            <i className="fa fa-eye" />
                                            {/* <i className="fa fa-eye-slash" /> */}
                                        </button>
                                    </div>
                                </div>
                                <div className="column-section">
                                    <div><DragIcon /> Student Activities</div>
                                    <div className="mt-1">
                                        <button className="btn">
                                            <i className="fa fa-edit" />
                                        </button>
                                        <button className="btn">
                                            <i className="fa fa-eye" />
                                            {/* <i className="fa fa-eye-slash" /> */}
                                        </button>
                                    </div>
                                </div>
                                <div className="column-section">
                                    <div className="w-50"><DragIcon /> Volunteering Experience</div>
                                    <div className="mt-1">
                                        <button className="btn">
                                            <i className="fa fa-edit" />
                                        </button>
                                        <button className="btn">
                                            <i className="fa fa-eye" />
                                            {/* <i className="fa fa-eye-slash" /> */}
                                        </button>
                                    </div>
                                </div>
                                <div className="column-section">
                                    <div><DragIcon /> Certifications</div>
                                    <div className="mt-1">
                                        <button className="btn">
                                            <i className="fa fa-edit" />
                                        </button>
                                        <button className="btn">
                                            <i className="fa fa-eye" />
                                            {/* <i className="fa fa-eye-slash" /> */}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        sidebar: state.sidebar,
        darkmode: state.darkmode,
    }
}

export default connect(mapStateToProps)(ResumeBuilder);