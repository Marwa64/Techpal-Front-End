import Layout from './Layout'
import PurpleBar from '../../components/common/PurpleBar'
import Track from '../../components/common/Track'
import TrackContainer from '../../components/admin/TrackContainer'
import AddTrackModal from '../../components/admin/AddTrackModal'
import AddSkillModal from '../../components/admin/AddSkillModal'
import ViewTrackModal from '../../components/admin/ViewTrackModal'

import { getTracks, removeTrack, getSkills } from '../../store/actions'

import { useState, useEffect } from 'react'
import { useDispatch, connect } from 'react-redux'

const Tracks = ({ skills, tracks }) => {
  const dispatch = useDispatch()
  const [spinner, setSpinner] = useState(false)
  const [localTracks, setLocalTracks] = useState([])
  const [displayAddTrack, setDisplayAddTrack] = useState(false)
  const [displayAddSkill, setDisplayAddSkill] = useState(false)
  const [viewTrack, setViewTrack] = useState(false)
  const [selectedTrack, selectTrack] = useState({})

  const viewTrackDetails = (track) => {
    selectTrack(track)
    setViewTrack(true)
  }

  const deleteTrack = async (track) => {
    setSpinner(true)
    await dispatch(removeTrack(track.ID))
    await dispatch(getTracks())
    setSpinner(false)
  }

  useEffect(async () => {
    if (tracks.length < 1) {
      setSpinner(true)
      await dispatch(getTracks())
      await dispatch(getSkills())
      setSpinner(false)
    }
    if (tracks.length > 0) {
      setLocalTracks(tracks)
    }
  }, [tracks])

  return (
    <Layout spinner={spinner} pageName='Tracks'>
      <PurpleBar title="Tracks" button={false} />
      <div className='d-flex justify-content-end mt-4 me-3'>
        <button onClick={() => setDisplayAddSkill(true)} className='btn-purple px-4 me-4'>Add Skill</button>
        <button onClick={() => setDisplayAddTrack(true)} className='btn-purple px-4 me-4'>Add Track</button>
      </div>
      <div className='container p-5 admin-tracks'>
        <div className='d-flex flex-wrap row-cols-3'>
          {
            localTracks.map(track => {
              return (
                <TrackContainer
                  key={`track${track.Track_id}`}
                  className='col'
                  track={track}
                  view={viewTrackDetails}
                  deleteTrack={deleteTrack}
                >
                  <Track name={track.name} color1={track.color1} color2={track.color2} />
                </TrackContainer>
              )
            })
          }
        </div>
      </div>
      <AddTrackModal show={displayAddTrack} handleClose={() => setDisplayAddTrack(false)} skills={skills} />
      <AddSkillModal show={displayAddSkill} handleClose={() => setDisplayAddSkill(false)} />
      <ViewTrackModal show={viewTrack} handleClose={() => setViewTrack(false)} skills={selectedTrack.skills} />
    </Layout>
  )
}
const mapStateToProps = state => {
  return {
    skills: state.skills,
    tracks: state.tracks
  }
}

export default connect(mapStateToProps)(Tracks)
