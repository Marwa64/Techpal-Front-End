import {
    Font,
    Page,
    View,
    Document,
    StyleSheet,
  } from '@react-pdf/renderer';
  
  import Header from './Header';
  import Skills from './Skills';
  import Education from './Education';
  import WorkExperience from './WorkExperience';
  import AboutMe from './AboutMe';
  import Contact from './Contact';
  import Projects from './Projects';
  import VolunteeringExperience from './VolunteeringExperience';
  import Certifications from './Certifications';

  const index = ({leftOrder, rightOrder}) => {
    const styles = StyleSheet.create({
        page: {
          padding: 30,
        },
        container: {
          flex: 1,
          flexDirection: 'row',
          '@media max-width: 400': {
            flexDirection: 'column',
          },
        },
        image: {
          marginBottom: 10,
        },
        leftColumn: {
          flexDirection: 'column',
          width: 170,
          paddingTop: 30,
          paddingRight: 15,
          '@media max-width: 400': {
            width: '100%',
            paddingRight: 0,
          },
          '@media orientation: landscape': {
            width: 200,
          },
        },
        rightColumn: {
            flex: 1,
            paddingTop: 30,
            paddingLeft: 15,
            '@media max-width: 400': {
              paddingTop: 10,
              paddingLeft: 0,
            },
          },
      });

      Font.register({
        family: 'Open Sans',
        src: `https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf`,
      });
      
      Font.register({
        family: 'Lato',
        src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
      });
      
      Font.register({
        family: 'Lato Italic',
        src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`,
      });
      
      Font.register({
        family: 'Lato Bold',
        src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
      });


      const leftColumnOrder = []
      leftOrder.forEach(element => {
        if (!element.hide) {
          switch (element.name) {
            case 'About Me':
              leftColumnOrder.push(<AboutMe key={ `left-${element.name}` } />);
              break;
            case 'Contact':
              leftColumnOrder.push(<Contact key={ `left-${element.name}` } />);
              break;        
            case 'Education':
              leftColumnOrder.push(<Education key={ `left-${element.name}` } />);
              break;
            case 'Skills':
              leftColumnOrder.push(<Skills key={ `left-${element.name}` } />);
              break;
            default:
              break;
          }
        }
      })

      const rightColumnOrder = []
      rightOrder.forEach(element => {
        if (!element.hide) {
          switch (element.name) {
            case 'Work Experience':
              rightColumnOrder.push(<WorkExperience key={ `right-${element.name}` } />);
              break;
            case 'Projects':
              rightColumnOrder.push(<Projects key={ `right-${element.name}` } />);
              break;        
            case 'Volunteering Experience':
              rightColumnOrder.push(<VolunteeringExperience key={ `right-${element.name}` } />);
              break;
            case 'Certifications':
              rightColumnOrder.push(<Certifications key={ `right-${element.name}` } />);
              break;
            default:
              break;
          }
        } 
      })
      
      const Resume = props => (
        <Page {...props} style={styles.page}>
          <Header />
          <View style={styles.container}>
            <View style={styles.leftColumn}>{
              leftColumnOrder.map(Component => ( Component ))
            }
            </View>
            <View style={styles.rightColumn}>{
                rightColumnOrder.map(Component => ( Component ))
              }
            </View>
          </View>
        </Page>
      );

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
  
  export default index;