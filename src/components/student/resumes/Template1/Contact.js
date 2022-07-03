import { Link, Text, View, StyleSheet } from '@react-pdf/renderer'

import Title from './Title'

const Contact = ({ user }) => {
  const styles = StyleSheet.create({
    container: {
      marginBottom: 10
    },
    section: {
      marginBottom: 5,
      display: 'flex',
      flexDirection: 'column'
    },
    subHeader: {
      fontFamily: 'Lato Bold',
      fontSize: 10,
      marginBottom: 2
    },
    content: {
      fontFamily: 'Lato',
      fontSize: 10
    }
  })

  return (
        <View style={styles.container}>
            <Title>Contact</Title>
            {user.address
              ? <View style={styles.section}>
                <Text style={styles.subHeader}>Address</Text>
                <Text style={styles.content}>{user.address}</Text>
              </View>
              : <></>
            }
            {user.phone
              ? <View style={styles.section}>
                <Text style={styles.subHeader}>Phone</Text>
                <Text style={styles.content}>{user.phone}</Text>
              </View>
              : <></>
            }
            {user.email
              ? <View style={styles.section}>
                <Text style={styles.subHeader}>Email</Text>
                <Text style={styles.content}>{user.email}</Text>
              </View>
              : <></>
            }
            {user.websites && user.websites.linkedin
              ? <View style={styles.section}>
                <Text style={styles.subHeader}>LinkedIn</Text>
                <Link style={styles.content} href={user.websites.linkedin}>{user.websites.linkedin}</Link>
              </View>
              : <></>
            }
            {user.websites && user.websites.github
              ? <View style={styles.section}>
                <Text style={styles.subHeader}>Github</Text>
                <Link style={styles.content} href={user.websites.github}>{user.websites.github}</Link>
              </View>
              : <></>
            }
            {user.websites && user.websites.portfolio
              ? <View style={styles.section}>
                <Text style={styles.subHeader}>Portfolio</Text>
                <Link style={styles.content} href={user.websites.portfolio}>{user.websites.portfolio}</Link>
              </View>
              : <></>
            }
        </View>
  )
}

export default Contact
