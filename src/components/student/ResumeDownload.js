import Template1 from '../../components/student/resumes/Template1'
import Template2 from '../../components/student/resumes/Template2'
import { PDFDownloadLink } from '@react-pdf/renderer'

import { getResume } from '../../store/actions'

import { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'

const ResumeDownload = ({ resume, user, currentTrack, currentProfile }) => {
  const dispatch = useDispatch()

  const [template, setTemplate] = useState('1')
  const [leftOrder, setLeftOrder] = useState([])
  const [rightOrder, setRightOrder] = useState([])

  useEffect(async () => {
    if (Object.keys(resume).length === 0) {
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
    }
  }, [resume])

  return (
    <PDFDownloadLink
        document={
            template === '1'
              ? <Template1 leftOrder={leftOrder} rightOrder={rightOrder} user={user} currentTrack={currentTrack}></Template1>
              : <Template2 leftOrder={leftOrder} rightOrder={rightOrder}></Template2>}
        fileName="Resume.pdf"
        className="btn-purple"
    >
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download'
        }
    </PDFDownloadLink>
  )
}
const mapStateToProps = state => {
  return {
    resume: state.resume
  }
}

export default connect(mapStateToProps)(ResumeDownload)
