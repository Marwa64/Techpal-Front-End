import { useState } from 'react'

const TrackContainer = ({ children, track, view }) => {
  const [displayButtons, setDisplayButtons] = useState(false)
  return (
    <div
      onMouseEnter={() => setDisplayButtons(true)}
      onMouseLeave={() => setDisplayButtons(false)}
    >
      {
        displayButtons
          ? <div className='track-container'>
              <button onClick={() => view(track)} className='btn btn-light rounded me-4'><i className="fa fa-eye" /></button>
              <button className='btn btn-danger rounded'><i className="fa fa-trash" /></button>
            </div>
          : <></>
      }
      {children}
    </div>
  )
}

export default TrackContainer
