import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Title from './components/Title';
import TextInput from './components/TextInput';
import Button from './components/Button';

const Login = () => {
  // Variabel biasa
  const [title, setTitle] = useState('Welcome !!!');

  // State untuk username
  const [username, setUsername] = useState('');

  return (
    <View style={styles.container}>
      {/* Judul */}
      <Text style={styles.welcome}>{title}</Text>

      {/* Input Username */}
      <TextInput
        placeholder="Masukkan username anda"
        label="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />

      {/* Input Password */}
      <TextInput
        placeholder="Masukkan password anda"
        label="Password"
        secureTextEntry={true}
      />

      {/* Tombol */}
      <Button label="Sign In" />
      <Button label="Sign In Google" color="red" colorText="#ffffff" />
      <Button label="Sign In Facebook" color="blue" colorText="#ffffff" />
      <Button label="Sign In Apple" color="black" colorText="#ffffff" />
      <Button label="Create New Account" color="#797171" colorText="#ffffff" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  welcome: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
