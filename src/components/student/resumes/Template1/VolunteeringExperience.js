import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

import Title from './Title';

const styles = StyleSheet.create({
  entryContainer: {
    marginBottom: 10,
  },
  details: {
    fontSize: 10,
    fontFamily: 'Lato',
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  leftColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  title: {
    fontSize: 11,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Lato Bold',
  },
});

const VolunteeringExperience = ({ data }) => (
  <View>
    <Title>Volunteering Experience</Title>
    {data ? 
      data.map(({ id, title, details }) => (
        <View key={`volunteering-experience-${id}`} style={styles.entryContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.leftColumn}>
              <Text style={styles.title}>{title}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.details}>{details}</Text>
          </View>
      </View>
    ))  : <></> }
  </View>
);

export default VolunteeringExperience;