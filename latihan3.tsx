import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

const Latihan3 = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/kyra2.jpeg')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.biodataContainer}>
        <Text style={styles.title}>Get To Know About Me</Text>
        <Text style={styles.text}>Name: Kyra Christina Pakasi</Text>
        <Text style={styles.text}>Date of birth:12 November 2005</Text>
        <Text style={styles.text}>Address: Rerer</Text>
        <Text style={styles.text}>Hobby: Watch movie</Text>
        <Text style={styles.text}>Religion: Adventist</Text>
        <Text style={styles.text}>Age: 19 Years old</Text>
      </View>
    </ScrollView>
  );
};

export default Latihan3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  biodataContainer: {
    marginTop: 30,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});
