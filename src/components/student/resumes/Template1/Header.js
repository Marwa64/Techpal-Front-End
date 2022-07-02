import { Text, View, StyleSheet } from '@react-pdf/renderer';

const Header = ({userName, trackName}) => {
  const styles = StyleSheet.create({
      container: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: '#112131',
        borderBottomStyle: 'solid',
        alignItems: 'stretch',
      },
      detailColumn: {
        flexDirection: 'column',
        flexGrow: 9,
        textTransform: 'uppercase',
      },
      name: {
        fontSize: 24,
        fontFamily: 'Lato Bold',
      },
      subtitle: {
        fontSize: 10,
        justifySelf: 'flex-end',
        fontFamily: 'Lato',
        marginTop: '8px',
        marginBottom: '8px',
      },
      link: {
        fontFamily: 'Lato',
        fontSize: 9,
        color: 'black',
        textDecoration: 'none',
        marginTop: '3px',
      },
    });
    return (
        <View style={styles.container}>
            <View style={styles.detailColumn}>
                <Text style={styles.name}>{userName}</Text>
                <Text style={styles.subtitle}>{trackName}</Text>
            </View>
        </View>
    )
}

export default Header;