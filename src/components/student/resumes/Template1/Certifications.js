import { View, StyleSheet } from '@react-pdf/renderer';

import Title from './Title';
import List, { Item } from './List';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  }
});

const Certifications = ({ data }) => (
  <View style={styles.container}>
    <Title>Certifications</Title>
    {data ? 
      <List>
        {data.map((certification, i) => (
          <Item key={i}>{certification}</Item>
        ))}
      </List>: <></>
    }
  </View>
);

export default Certifications;