import React from 'react';
import {View, Image, StyleSheet, Text, ScrollView} from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>1. Gambar Lokal</Text>
      <Image
        source={require('./assets/Header_Kepal_Kepil.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>2. Gambar dari Internet </Text>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1755147047179-76e345776a1e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
        }}
        style={styles.image}
        resizeMode="cover"
      />

      <Text style={styles.title}>3. Gambar dari React Native</Text>
      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        style={styles.image}
        resizeMode="contain"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 250,
    height: 150,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
});
