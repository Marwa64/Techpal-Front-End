import { Link, Text, View, StyleSheet } from '@react-pdf/renderer'

const Header = () => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      borderBottomWidth: 2,
      borderBottomColor: '#112131',
      borderBottomStyle: 'solid',
      alignItems: 'stretch'
    },
    detailColumn: {
      flexDirection: 'column',
      flexGrow: 9,
      textTransform: 'uppercase'
    },
    name: {
      fontSize: 24,
      fontFamily: 'Lato Bold'
    },
    subtitle: {
      fontSize: 10,
      justifySelf: 'flex-end',
      fontFamily: 'Lato',
      marginTop: '4px'
    },
    link: {
      fontFamily: 'Lato',
      fontSize: 9,
      color: 'white',
      textDecoration: 'none',
      marginTop: '3px'
    }
  })
  return (
        <View style={styles.container}>
            <View style={styles.detailColumn}>
                <Text style={styles.name}>Luke Skywalker</Text>
                <Text style={styles.subtitle}>Jedi Master</Text>
                <Link href="mailto:luke@theforce.com" style={styles.link}>
                    luke@theforce.com
                </Link>
            </View>
        </View>
  )
}

export default Header
