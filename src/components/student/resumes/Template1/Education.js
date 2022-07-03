import { Text, View, StyleSheet } from '@react-pdf/renderer'

import Title from './Title'

const Education = ({ user }) => {
  const styles = StyleSheet.create({
    container: {
      marginBottom: 10
    },
    headerContainer: {
      flexDirection: 'row',
      marginBottom: 5,
      fontSize: 11,
      fontFamily: 'Lato Bold',
      color: 'black',
      textDecoration: 'none'
    },
    leftColumn: {
      flexDirection: 'column',
      flexGrow: 9
    },
    rightColumn: {
      flexDirection: 'column',
      flexGrow: 1,
      alignItems: 'flex-end',
      justifySelf: 'flex-end'
    },
    content: {
      fontFamily: 'Lato',
      fontSize: 10
    }
  })

  return (
        <View style={styles.container}>
            <Title>Education</Title>
            { user.university && user.degree && user.major
              ? <>
              <View style={styles.headerContainer}>
                <View style={styles.leftColumn}>
                  <Text>{user.university}</Text>
                </View>
                <View style={styles.rightColumn}>
                  {user.start_year && user.end_year
                    ? <Text>{user.start_year} - {user.end_year}</Text>
                    : <></>
                    }
                </View>
              </View>
              <Text style={styles.content}>{user.degree} degree in {user.major}</Text>
              </>
              : <></>
            }
        </View>
  )
}

export default Education
