
import { viewJob } from '../../store/actions'

import { useDispatch } from 'react-redux'

const Job = ({ job, profileId }) => {
  const dispatch = useDispatch()

  const goToJob = async () => {
    window.open(job.url, '_blank')
    await dispatch(viewJob(profileId, job))
  }

  return (
        <div className="job row mb-5 mx-1">
            <div className="col px-4">
                <div className="row mx-1 fw-bold">
                    {job.title} - {job.location}
                </div>
                <div className="row mx-1">
                    {job.company}
                </div>
                <div className="row mx-1 fw-light">
                    <div className="col-12 p-0 mt-1">
                        {job.summary}
                        <button className="btn mb-1 red-link" onClick={goToJob}> Read more</button>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-2 d-flex align-items-center justify-content-center mt-2">
                <button onClick={goToJob} className="btn-purple">Apply</button>
            </div>
        </div>
  )
}

export default Job
