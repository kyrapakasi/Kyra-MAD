import {StyleSheet, View, Image} from 'react-native';
import React from 'react';

const Flexbox = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.redContainer} />
        <View style={styles.greenContainer} />
        <View style={styles.blueContainer} />
        <View style={styles.blackContainer} />
      </View>

      <View style={styles.container2}>
        <Image
          source={require('./assets/logo-with-motto-3.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.container3}>
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
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center', // bisa diganti dengan flex-end, center, flex-start
    justifyContent: 'space-around', //
    backgroundColor: 'red',
  },
  redContainer: {
    height: 80,
    width: 80,
    backgroundColor: 'black',
  },
  greenContainer: {
    height: 80,
    width: 80,
    backgroundColor: 'lightgreen',
  },
  blueContainer: {
    height: 80,
    width: 80,
    backgroundColor: 'black',
  },
  blackContainer: {
    height: 80,
    width: 80,
    backgroundColor: 'red',
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  container3: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  redBox: {
    height: 80,
    width: 80,
    backgroundColor: 'black',
  },
  greenBox: {
    height: 80,
    width: 80,
    backgroundColor: 'lightgreen',
  },
  blueBox: {
    height: 80,
    width: 80,
    backgroundColor: 'black',
  },
});
