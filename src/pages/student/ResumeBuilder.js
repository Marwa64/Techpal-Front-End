import Layout from './Layout'
import DragIcon from '../../assets/DragIcon'
import Template1 from '../../components/student/resumes/Template1'
import Template2 from '../../components/student/resumes/Template2'
import EditSkillsModal from '../../components/student/EditSkillsModal'
import EditResumeModal from '../../components/student/EditResumeModal'
import EditCertificationsModal from '../../components/student/EditCertificationsModal'

import { getResume, addResume, updateResume } from '../../store/actions'

import { useState, useCallback, useEffect } from 'react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import { PDFViewer } from '@react-pdf/renderer'
import { Form } from 'react-bootstrap'
import { connect, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ColumnItem = SortableElement(({ value, hide, edit }) => {
  return (
        <div className="column-section">
            <div><DragIcon /> {value.name} </div>
            <div className="mt-1">
                <button className="btn" onClick={() => edit(value)}>
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
})

const ColumnList = SortableContainer(({ items, hide, edit }) => {
  return (
    <div>
      {items.map((value, index) => (
        <ColumnItem key={`item-${value.name}`} index={index} value={value} hide={hide} edit={edit} />
      ))}
    </div>
  )
})

const ResumeBuilder = ({ user, currentTrack, currentProfile, resume }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [spinner, setSpinner] = useState(true)

  const [editSkills, setEditSkills] = useState(false)
  const [editResume, setEditResume] = useState(false)
  const [editCertifications, setEditCertifications] = useState(false)
  const [elementToEdit, setEditElement] = useState(null)

  const [template, setTemplate] = useState('1')
  const [leftOrder, setLeftOrder] = useState([])
  const [rightOrder, setRightOrder] = useState([])

  const arrayMoveMutate = (array, from, to) => {
    array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0])
  }

  const arrayMove = (array, from, to) => {
    array = array.slice()
    arrayMoveMutate(array, from, to)
    return array
  }

  const onLeftSortEnd = useCallback(({ oldIndex, newIndex }) => {
    setLeftOrder(oldItems => arrayMove(oldItems, oldIndex, newIndex))
  }, [])

  const hideLeftElement = (element) => {
    const order = leftOrder.map(leftElement =>
      leftElement.name === element.name ? { ...leftElement, hide: !leftElement.hide } : leftElement)
    setLeftOrder(order)
  }

  const onRightSortEnd = useCallback(({ oldIndex, newIndex }) => {
    setRightOrder(oldItems => arrayMove(oldItems, oldIndex, newIndex))
  }, [])

  const hideRightElement = (element) => {
    const order = rightOrder.map(rightElement =>
      rightElement.name === element.name ? { ...rightElement, hide: !rightElement.hide } : rightElement)
    setRightOrder(order)
  }

  const editElement = (element) => {
    if (['About Me', 'Contact', 'Education'].includes(element.name)) {
      navigate('/account')
    } else if (element.name === 'Skills') {
      setEditElement(element)
      setEditSkills(true)
    } else if (element.name === 'Certifications') {
      setEditElement(element)
      setEditCertifications(true)
    } else {
      setEditElement(element)
      setEditResume(true)
    }
  }

  const updateSkills = (element) => {
    const order = leftOrder.map(leftElement =>
      leftElement.name === element.name ? { ...leftElement, data: element.data } : leftElement)
    setEditElement(element)
    setLeftOrder(order)
  }

  const updateRightElement = (element) => {
    const order = rightOrder.map(rightElement =>
      rightElement.name === element.name ? { ...rightElement, data: element.data } : rightElement)
    setEditElement(element)
    setRightOrder(order)
  }

  const saveResume = async () => {
    const newRightOrder = []
    rightOrder.forEach(element => {
      const newElement = {
        name: element.name,
        hide: element.hide
      }
      const data = []
      element.data.forEach(oldData => {
        data.push(JSON.stringify(oldData))
      })
      newElement.data = data
      newRightOrder.push(newElement)
    })
    const updatedResume = {
      template,
      leftorder: leftOrder,
      rightorder: newRightOrder
    }
    setSpinner(true)
    if (!resume.Profile_id) {
      await dispatch(addResume(currentProfile.ID, updatedResume))
    } else {
      await dispatch(updateResume(currentProfile.ID, updatedResume))
    }
    setSpinner(false)
  }

  useEffect(async () => {
    if (Object.keys(resume).length === 0) {
      setSpinner(true)
      if (!(Object.keys(currentProfile).length === 0)) {
        await dispatch(getResume(currentProfile.ID))
      }
    } else {
      setTemplate(resume.template)
      setLeftOrder(resume.leftorder)
      const newRightOrder = []
      resume.rightorder.forEach(element => {
        const newElement = {
          name: element.name,
          hide: element.hide
        }
        const data = []
        element.data.forEach(oldData => {
          data.push(JSON.parse(oldData))
        })
        newElement.data = data
        newRightOrder.push(newElement)
      })
      setRightOrder(newRightOrder)
      setSpinner(false)
    }
  }, [currentProfile])

  return (
        <Layout spinner={spinner} pageName='Resume Builder'>
          {!spinner
            ? <div className="container resume-builder">
                  <div className="row mt-4">
                      <div className="col-12 d-flex justify-content-center">
                          <button onClick={saveResume} className="btn-purple">Save</button>
                      </div>
                  </div>
                  <div className="row mt-4 pt-2">
                      <div className="col-12 col-xl-6 d-none d-lg-block">
                      <PDFViewer height='97%' width='100%'>
                          {template === '1'
                            ? <Template1 leftOrder={leftOrder} rightOrder={rightOrder} user={user} currentTrack={currentTrack}></Template1>
                            : <Template2 leftOrder={leftOrder} rightOrder={rightOrder}></Template2>
                          }
                      </PDFViewer>
                      </div>
                      <div className="col-12 col-xl-6 text-center">
                          <div className="mb-4 px-4 mx-1">
                              <h5>Template</h5>
                              <div className="row mt-3">
                                  <Form.Select
                                      onChange={(event) => { setTemplate(Number(event.target.value)) }}
                                      aria-label="Default select template"
                                  >
                                      <option value={'1'}>Template 1</option>
                                      <option value={'2'}>Template 2</option>
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
                                  edit={editElement}
                              />
                          </div>
                          <div className="mb-4 px-3">
                              <h5>Right Column</h5>
                              <ColumnList
                                  distance={1}
                                  items={rightOrder}
                                  onSortEnd={onRightSortEnd}
                                  hide={hideRightElement}
                                  edit={editElement}
                              />
                          </div>
                      </div>
                  </div>
              </div>
            : <></>
          }
            <EditSkillsModal
                show={editSkills}
                handleClose={() => setEditSkills(false)}
                element={elementToEdit}
                update={updateSkills}
            />
            <EditResumeModal
                show={editResume}
                handleClose={() => setEditResume(false)}
                element={elementToEdit}
                update={updateRightElement}
            />
            <EditCertificationsModal
                show={editCertifications}
                handleClose={() => setEditCertifications(false)}
                element={elementToEdit}
                update={updateRightElement}
            />
        </Layout>
  )
}
const mapStateToProps = state => {
  return {
    user: state.user,
    currentTrack: state.currentTrack,
    currentProfile: state.currentProfile,
    resume: state.resume
  }
}

export default connect(mapStateToProps)(ResumeBuilder)
