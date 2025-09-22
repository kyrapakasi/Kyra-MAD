import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Title from './components/Title';
import TextInput from './components/TextInput';
import Button from './components/Button';

const Login = () => {
  // Variabel biasa
  const [title, setTitle] = useState('Registration');

  // State untuk input
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phonenumber, setPhonenumber] = useState('');

  // Fungsi validasi angka untuk phone number
  const handlePhoneChange = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, ''); // hanya izinkan angka
    setPhonenumber(numericValue);
  };
  const onRegister = () => {
    console.log({
      name,
      username,
      email,
      address,
      phonenumber,
    });
  };

  return (
    <View style={styles.container}>
      {/* Judul */}
      <Text style={styles.title}>{title}</Text>

      <TextInput
        placeholder="Masukkan nama lengkap anda"
        label="Name"
        value={name}
        onChangeText={text => setName(text)}
      />

      <TextInput
        placeholder="Masukkan username anda"
        label="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />

      <TextInput
        placeholder="Masukkan email anda"
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <TextInput
        placeholder="Masukkan tempat tinggal anda"
        label="Address"
        value={address}
        onChangeText={text => setAddress(text)}
      />

      <TextInput
        placeholder="Masukkan nomor telepon anda"
        label="Phone Number"
        value={phonenumber}
        onChangeText={handlePhoneChange} // langsung panggil fungsi
        keyboardType="numeric"
      />

      {/* Tombol */}
      <Button
        label="Register"
        color="#70377eff"
        colorText="#ffffff"
        onPress={onRegister}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    paddingTop: 10,
    padding: 21,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
  },
});
