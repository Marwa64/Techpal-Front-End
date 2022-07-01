import { Text, View, StyleSheet } from '@react-pdf/renderer';

import Title from './Title';

const AboutMe = () => {
    const styles = StyleSheet.create({
        container: {
          marginBottom: 10,
        },
        school: {
          fontFamily: 'Lato Bold',
          fontSize: 10,
        },
        degree: {
          fontFamily: 'Lato',
          fontSize: 10,
        },
        candidate: {
          fontFamily: 'Lato Italic',
          fontSize: 10,
        },
      });

    return (
        <View style={styles.container}>
            <Title>About Me</Title>
            <Text style={styles.school}>Jedi Academy</Text>
            <Text style={styles.degree}>Jedi Master</Text>
            <Text style={styles.candidate}>A long, long time ago</Text>
        </View>
    )
}

export default AboutMe;