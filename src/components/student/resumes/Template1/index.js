import {
  Font,
  Page,
  View,
  Document,
  StyleSheet
} from '@react-pdf/renderer'

import Header from './Header'
import Skills from './Skills'
import Education from './Education'
import WorkExperience from './WorkExperience'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Projects from './Projects'
import VolunteeringExperience from './VolunteeringExperience'
import Certifications from './Certifications'

const index = ({ leftOrder, rightOrder, user, currentTrack }) => {
  const styles = StyleSheet.create({
    page: {
      padding: 30
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      '@media max-width: 400': {
        flexDirection: 'column'
      }
    },
    image: {
      marginBottom: 10
    },
    leftColumn: {
      flexDirection: 'column',
      width: 170,
      paddingTop: 30,
      paddingRight: 15,
      '@media max-width: 400': {
        width: '100%',
        paddingRight: 0
      },
      '@media orientation: landscape': {
        width: 200
      }
    },
    rightColumn: {
      flex: 1,
      paddingTop: 30,
      paddingLeft: 15,
      '@media max-width: 400': {
        paddingTop: 10,
        paddingLeft: 0
      }
    }
  })

  Font.register({
    family: 'Open Sans',
    src: 'https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf'
  })

  Font.register({
    family: 'Lato',
    src: 'https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf'
  })

  Font.register({
    family: 'Lato Italic',
    src: 'https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf'
  })

  Font.register({
    family: 'Lato Bold',
    src: 'https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf'
  })

  const leftColumnOrder = []
  leftOrder.forEach(element => {
    if (!element.hide) {
      switch (element.name) {
        case 'About Me':
          leftColumnOrder.push(<AboutMe key={ `left-${element.name}`} user={user} />)
          break
        case 'Contact':
          leftColumnOrder.push(<Contact key={ `left-${element.name}` } user={user} />)
          break
        case 'Skills':
          leftColumnOrder.push(<Skills key={ `left-${element.name}` } skills={element.data} />)
          break
        default:
          break
      }
    }
  })

  const rightColumnOrder = []
  rightOrder.forEach(element => {
    if (!element.hide) {
      switch (element.name) {
        case 'Education':
          rightColumnOrder.push(<Education key={ `right-${element.name}` } user={user} />)
          break
        case 'Work Experience':
          rightColumnOrder.push(<WorkExperience key={ `right-${element.name}` } data={element.data} />)
          break
        case 'Projects':
          rightColumnOrder.push(<Projects key={ `right-${element.name}` } data={element.data} />)
          break
        case 'Volunteering Experience':
          rightColumnOrder.push(<VolunteeringExperience key={ `right-${element.name}` } data={element.data} />)
          break
        case 'Certifications':
          rightColumnOrder.push(<Certifications key={ `right-${element.name}` } data={element.data} />)
          break
        default:
          break
      }
    }
  })

  const Resume = props => (
        <Page {...props} style={styles.page}>
          <Header userName={user.full_name} trackName={currentTrack.name} />
          <View style={styles.container}>
            <View style={styles.leftColumn}>{
              leftColumnOrder.map(Component => (Component))
            }
            </View>
            <View style={styles.rightColumn}>{
                rightColumnOrder.map(Component => (Component))
              }
            </View>
          </View>
        </Page>
  )

  return (
        <Document
            author={user.full_name}
            keywords={`resume, ${currentTrack.name}`}
            subject={`${currentTrack.name} Resume`}
            title={`${user.full_name} Resume`}
        >
            <Resume size="A4" />
        </Document>
  )
}

export default index
