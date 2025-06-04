import {Image, TextInput, View} from 'react-native';
import React from 'react';
import {styles} from './Styles';
interface CustomProps {
  value: string;
  setTerm: (text: string) => void;
}
const Searchbox = ({value, setTerm}: CustomProps) => {
  return (
    <View style={styles.inputContainer}>
      <Image
        source={require('../../Assets/Images/search.png')}
        style={{height: 20, width: 20}}
      />
      <TextInput
        placeholder="Search"
        placeholderTextColor={'#A0A3BD'}
        style={styles.input}
        value={value}
        onChangeText={text => setTerm(text)}
      />
      <Image
        source={require('../../Assets/Images/menu.png')}
        style={{height: 20, width: 20}}
      />
    </View>
  );
};

export default Searchbox;
