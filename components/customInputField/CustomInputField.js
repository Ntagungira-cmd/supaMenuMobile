import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CustomInputField = ({ name,placeholder, icon, keyBoardType, value, secureTextEntry, onChange }) => {
  
  const handleChange = (text)=>{
    onChange(name, text)
  }

  return (
    <View style={styles.container}>
      {icon && <AntDesign name={icon} style={styles.icon} />}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={keyBoardType!=null?keyBoardType:'default'}
        secureTextEntry={secureTextEntry}
        value={value}
        name={name}
        onChangeText={handleChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 7,
    paddingHorizontal: 10,
    marginTop: 10,
  },

  icon: {
    marginRight: 10,
    fontSize: 20,
  },

  input: {
    flex: 1,
    paddingVertical: 8,
  },

});

export default CustomInputField;
