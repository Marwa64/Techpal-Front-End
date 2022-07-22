import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const PurpleBar = ({ path, title, button, buttonName, method }) => {
  const darkmode = useSelector(state => state.darkmode)
  const navigate = useNavigate()

  const buttonFunction = () => {
    if (path === 'modal') {
      method()
    } else {
      navigate(path)
    }
  }

  return (
        <div className={`${darkmode ? 'darkpurple-bg' : 'purple-bg'}`}>
            <div className="container">
                <div className="p-5 pb-4 pt-4 d-flex justify-content-md-between flex-column flex-md-row text-center text-md-start">
                    <div>
                        <h4 className="fw-normal mt-2 pt-1" style={{ fontSize: '20px' }}>{title}</h4>
                    </div>
                    {button
                      ? <button onClick={buttonFunction} className="btn btn-light px-4 pt-2 pb-2 mt-2 h-100 shadow">
                        {buttonName}
                    </button>
                      : <div></div>}
                </div>
            </div>
        </div>
  )
}

export default PurpleBar
