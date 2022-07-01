import Sidebar from "../../components/student/Sidebar"
import Header from "../../components/common/Header"
import DragIcon from "../../assets/DragIcon"
import Template1 from "../../components/student/resumes/Template1"
import Template2 from "../../components/student/resumes/Template2"

import { useState, useCallback } from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import { PDFViewer } from '@react-pdf/renderer';
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { Helmet } from 'react-helmet';

const ColumnItem = SortableElement(({value, hide}) => {
    const edit = () => {
        console.log('edit');
    }
    return (
        <div className="column-section">
            <div><DragIcon /> {value.name} </div>
            <div className="mt-1">
                <button className="btn" onClick={edit}>
                    <i className="fa fa-edit" />
                </button>
                <button className="btn" onClick={() => hide(value)}>
                    {value.hide
                        ? <i className="fa fa-eye-slash" />
                        : <i className="fa fa-eye" />
                    }
                </button>
            </div>
        </div>
    )
});

const ColumnList = SortableContainer(({items, hide}) => {
  return (
    <div>
      {items.map((value, index) => (
        <ColumnItem key={`item-${value.name}`} index={index} value={value} hide={hide} />
      ))}
    </div>
  );
});

const ResumeBuilder = ({ sidebar, darkmode }) => {
    const [template, setTemplate] = useState(1);

    const [leftOrder, setLeftOrder] = useState([
        {name: 'About Me', hide: false},
        {name: 'Contact', hide: false},
        {name: 'Education', hide: false},
        {name: 'Skills', hide: false},
    ]);

    const [rightOrder, setRightOrder] = useState([
        {name: 'Work Experience', hide: false},
        {name: 'Projects', hide: false},
        {name: 'Volunteering Experience', hide: false},
        {name: 'Certifications', hide: false},
    ]);

    const arrayMoveMutate = (array, from, to) => {
        array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
    };
    
    const arrayMove = (array, from, to) => {
        array = array.slice();
        arrayMoveMutate(array, from, to);
        return array;
    };

    const onLeftSortEnd = useCallback(({ oldIndex, newIndex }) => {
        setLeftOrder(oldItems => arrayMove(oldItems, oldIndex, newIndex));
    }, []);

    const hideLeftElement = (element) => {
        const order = []
        leftOrder.forEach(leftElement => {
            if (element.name === leftElement.name) {
                order.push({
                    name: leftElement.name,
                    hide: !leftElement.hide,
                })
            } else {
                order.push(leftElement)
            }
        })
        setLeftOrder(order);
    }

    const onRightSortEnd = useCallback(({ oldIndex, newIndex }) => {
        setRightOrder(oldItems => arrayMove(oldItems, oldIndex, newIndex));
    }, []);

    const hideRightElement = (element) => {
        const order = []
        rightOrder.forEach(leftElement => {
            if (element.name === leftElement.name) {
                order.push({
                    name: leftElement.name,
                    hide: !leftElement.hide,
                })
            } else {
                order.push(leftElement)
            }
        })
        setRightOrder(order);
    }

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
                            {template === 1
                                ? <Template1 leftOrder={leftOrder} rightOrder={rightOrder}></Template1>
                                : <Template2 leftOrder={leftOrder} rightOrder={rightOrder}></Template2>
                            }
                        </PDFViewer>
                        </div>
                        <div className="col-12 col-xl-6 text-center">
                            <div className="mb-4 px-4 mx-1">
                                <h5>Template</h5>
                                <div className="row mt-3">
                                    <Form.Select
                                        onChange={(event) => {setTemplate(Number(event.target.value))}}
                                        aria-label="Default select template"
                                    >
                                        <option value={1}>Template 1</option>
                                        <option value={2}>Template 2</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className="mb-4 px-3">
                                <h5>Left Column</h5>
                                <ColumnList
                                    distance={1}
                                    items={leftOrder}
                                    onSortEnd={onLeftSortEnd}
                                    hide={hideLeftElement}
                                />
                            </div>
                            <div className="mb-4 px-3">
                                <h5>Right Column</h5>
                                <ColumnList
                                    distance={1}
                                    items={rightOrder}
                                    onSortEnd={onRightSortEnd}
                                    hide={hideRightElement}
                                />
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