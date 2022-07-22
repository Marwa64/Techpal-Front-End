import { Text, View, StyleSheet } from '@react-pdf/renderer'

import Title from './Title'

const AboutMe = ({ user }) => {
  const styles = StyleSheet.create({
    container: {
      marginBottom: 10
    },
    about: {
      fontFamily: 'Lato',
      fontSize: 10
    }
  })

  return (
        <View style={styles.container}>
            <Title>About Me</Title>
            <Text style={styles.about}>{user.about}</Text>
        </View>
  )
}

export default AboutMe
