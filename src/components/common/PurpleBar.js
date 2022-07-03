import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const PurpleBar = (props) => {
  const darkmode = useSelector(state => state.darkmode)
  const navigate = useNavigate()

  return (
        <div className={`${darkmode ? 'darkpurple-bg' : 'purple-bg'}`}>
            <div className="container">
                <div className="p-5 pb-4 pt-4 d-flex justify-content-md-between flex-column flex-md-row text-center text-md-start">
                    <div>
                        <h4 className="fw-normal mt-2 pt-1" style={{ fontSize: '20px' }}>{props.title}</h4>
                    </div>
                    {props.button
                      ? <button onClick={() => navigate(props.path)} className="btn btn-light px-4 pt-2 pb-2 mt-2 h-100 shadow">
                        {props.buttonName}
                    </button>
                      : <div></div>}
                </div>
            </div>
        </div>
  )
}

export default PurpleBar
