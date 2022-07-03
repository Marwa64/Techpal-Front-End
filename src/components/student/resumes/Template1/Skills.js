import { View, StyleSheet } from '@react-pdf/renderer'

import Title from './Title'
import List, { Item } from './List'

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  }
})

const Skills = ({ skills }) => (
  <View style={styles.container}>
    <Title>Skills</Title>
    {skills
      ? <List>
        {skills.map((skill, i) => (
          <Item key={i}>{skill}</Item>
        ))}
      </List>
      : <></>
    }
  </View>
)

export default Skills
