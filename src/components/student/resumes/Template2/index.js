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
import Experience from './Experience'

const index = () => {
  const styles = StyleSheet.create({
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
      padding: 30,
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
      },
      backgroundColor: '#194d65',
      color: 'white'
    },
    rightColumn: {
      padding: 30,
      flex: 1,
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

  const Resume = props => (
        <Page {...props}>
          <View style={styles.container}>
            <View style={styles.leftColumn}>
              <Header />
              <Education />
              <Skills />
            </View>
            <View style={styles.rightColumn}>
              <Experience />
            </View>
          </View>
        </Page>
  )

  return (
        <Document
            author="Luke Skywalker"
            keywords="awesome, resume, start wars"
            subject="The resume of Luke Skywalker"
            title="Resume"
        >
            <Resume size="A4" />
        </Document>
  )
}

export default index
