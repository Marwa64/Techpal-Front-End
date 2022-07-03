import Layout from './Layout'
import PurpleBar from '../../components/common/PurpleBar'

import { connect } from 'react-redux'

const Tracks = () => {
  return (
    <Layout spinner={false} pageName='Tracks'>
      <PurpleBar title="Tracks" button={false} />
    </Layout>
  )
}
const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps)(Tracks)
