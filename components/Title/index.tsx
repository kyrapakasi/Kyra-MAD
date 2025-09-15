import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function Title({text}: {text: string}) {
  return <Text style={styles.title}>{text}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 50,
    alignSelf: 'center',
  },
});
