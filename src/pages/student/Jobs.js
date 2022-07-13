import Layout from './Layout'
import PurpleBar from '../../components/common/PurpleBar'

import Job from '../../components/student/Job'

import { getJobs } from '../../store/actions'

import { useState, useEffect } from 'react'

import { connect, useDispatch } from 'react-redux'

const Jobs = ({ currentProfile, currentTrack, jobs }) => {
  const dispatch = useDispatch()
  const [spinner, setSpinner] = useState(false)

  useEffect(async () => {
    if (Object.keys(currentTrack).length > 0 && jobs.length < 1) {
      setSpinner(true)
      await dispatch(getJobs(currentTrack.name, currentProfile.ID))
      setSpinner(false)
    }
  }, [currentTrack, jobs])

  return (
        <Layout spinner={spinner} pageName='Jobs'>
            <PurpleBar title={`Job Recommendations for ${currentTrack.name}`} button={false} />
                <div className="container mt-5">
                  <div className="row p-5 pt-0">
                      {jobs.map((job, index) => {
                        return (
                            <Job key={`job-${index}`} profileId={currentProfile.ID} job={job} />
                        )
                      })}
                  </div>
              </div>
        </Layout>
  )
}

const mapStateToProps = state => {
  return {
    currentProfile: state.currentProfile,
    currentTrack: state.currentTrack,
    jobs: state.jobs
  }
}

export default connect(mapStateToProps)(Jobs)
