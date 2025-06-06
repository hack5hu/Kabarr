import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './Styles';
const Header = ({navigation}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.goBack()}>
      <Image
        source={require('../..//Assets/Images/arrow.png')} // replace with your image source
        style={styles.backButton}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Fill your Profile</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Header;
