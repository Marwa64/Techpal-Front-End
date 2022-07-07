import { useEffect } from 'react'
import { connect } from 'react-redux'
import { removeMessage } from '../../store/actions'

const Message = ({ message, removeMessage }) => {
  useEffect(() => {
    if (message.message) {
      setTimeout(() => {
        removeMessage()
      }, 2000)
    }
  }, [message])

  return (
    <div>
    {message.message
      ? <div className='message-container align-items-center' style={{ backgroundColor: message.error ? '#f8c5c5' : '#c5f8db' }}>
        <span className='mx-2'>{message.message}</span>
      </div>
      : ''}
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeMessage: () => dispatch(removeMessage())
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.message
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Message)
