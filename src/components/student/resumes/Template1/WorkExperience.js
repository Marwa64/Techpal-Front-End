import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

import Title from './Title';

const styles = StyleSheet.create({
  entryContainer: {
    marginBottom: 10,
  },
  date: {
    fontSize: 11,
    fontFamily: 'Lato Bold',
  },
  bulletPoint: {
    fontSize: 10,
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
  rightColumn: {
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'flex-end',
    justifySelf: 'flex-end',
  },
  title: {
    fontSize: 11,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Lato Bold',
  },
});

const WorkExperience = ({ data }) => (
  <View>
    <Title>Work Experience</Title>
    {data ? 
      data.map(({ id, title, startYear, endYear, details }) => (
        <View key={`work-experience-${id}`} style={styles.entryContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.leftColumn}>
              <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.rightColumn}>
              <Text style={styles.date}>{startYear} - {endYear}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.details}>{details}</Text>
          </View>
      </View>
    ))  : <></> }
  </View>
);

export default WorkExperience;