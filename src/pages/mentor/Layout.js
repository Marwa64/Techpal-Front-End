import Header from '../../components/common/Header'
import Spinner from '../../components/common/Spinner'

import Message from '../../components/common/Message'

import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

const Layout = ({ darkmode, sidebar, pageName, spinner, children }) => {
  return (
    <div className={`${darkmode ? 'darkgrey-bg' : 'grey-bg'}`}>
      <Helmet>
          <title>TechPal | {pageName}</title>
      </Helmet>
      {spinner ? <Spinner /> : <></>}
      <div className={'content'}>
          <Message />
          <Header mentor={true} />
          {children}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    darkmode: state.darkmode,
    sidebar: state.sidebar
  }
}

export default connect(mapStateToProps)(Layout)
