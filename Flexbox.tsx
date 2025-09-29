import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Flexbox = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.redContainer} />
        <View style={styles.greenContainer} />
        <View style={styles.blueContainer} />
      </View>

      <View style={styles.container2}>
        <View style={styles.redBox} />
        <View style={styles.greenBox} />
        <View style={styles.blueBox} />
      </View>
    </>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: 'pink',
  },
  redContainer: {
    flex: 1,
    backgroundColor: 'lightred',
  },
  greenContainer: {
    flex: 2,
    backgroundColor: 'lightgreen',
  },
  blueContainer: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  container2: {
    flex: 1,
    flexDirection: 'row', //bisa row, column
    justifyContent: 'space-evenly', //bisa flex-start, center, space-between, space-around
    alignItems: 'flex-end', //bisa flex-start, flex-end, stretch

    backgroundColor: 'lightyellow',
  },
  redBox: {
    height: 50,
    width: 50,
    backgroundColor: 'pink',
  },
  greenBox: {
    height: 50,
    width: 50,
    backgroundColor: 'lightgreen',
  },
  blueBox: {
    height: 50,
    width: 50,
    backgroundColor: 'lightblue',
  },
});
//fles, flesDirection, justifyContent, alignItems, alignSelf, flexWrap, flexGrow, flexShrink
//alignContent, position, top, bottom, left, right, zIndex
