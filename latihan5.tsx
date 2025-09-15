import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import Title from './components/Title';
import Input from './components/TextInput';
import Button from './components/Button';

export default function SignInScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Username dan password tidak boleh kosong!');
    } else {
      Alert.alert('Login Info', `Username: ${username}\nPassword: ${password}`);
    }
  };

  return (
    <View style={styles.container}>
      <Title text="Welcome" />

      <Input
        label="Username"
        value={username}
        onChangeText={setUsername}
        placeholder="Masukkan username anda"
      />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="Masukkan password anda"
      />

      <Button text="Sign In" color="#FF6600" onPress={handleSignIn} />
      <Button
        text="Sign in Google"
        color="red"
        onPress={() => Alert.alert('Google')}
      />
      <Button
        text="Sign in Facebook"
        color="blue"
        onPress={() => Alert.alert('Facebook')}
      />
      <Button
        text="Sign in Apple"
        color="black"
        onPress={() => Alert.alert('Apple')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    padding: 20,
  },
});
