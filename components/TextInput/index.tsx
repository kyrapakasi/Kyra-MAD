import React from 'react';
import {TextInput as Input, Text, StyleSheet} from 'react-native';

type Props = {
  placeholder?: string;
  label: string;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
};

const TextInput = ({
  placeholder = '',
  label,
  secureTextEntry = false,
  onChangeText,
}: Props) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <Input
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
      />
    </>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    height: 45,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 14,
    color: 'black',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
});
